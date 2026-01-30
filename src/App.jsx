import { useEffect, useState } from "react";
import { fetchImages } from "./components/images-api";
import { ImageCard } from "./components/ImageCard/ImageCard";
import { ImageList } from "./components/ImageList/ImageList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageModal } from "./components/ImageModal/ImageModal";
import { LoadMore } from "./components/LoadMore/LoadMore";
import { Loader } from "./components/Loader/Loader";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [largeImage, setLargeImage] = useState("");

  useEffect(() => {
    async function getImages() {
      if (query === "") {
        return;
      }
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages({ query, page });
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setImages([]);
      setPage(1);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (largeImageURL) => {
    setShowModal(true);
    setLargeImage(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImage("");
  };
  return (
   <div>
  <SearchBar onSearch={handleSearch} />
  {images.length > 0 && <ImageList images={images} openModal={openModal} />}
  {error && <p>Something went wrong, please try again later.</p>}
  {images.length > 0 && !isLoading && <LoadMore onLoadMore={handleLoadMore} />}
  {isLoading && <Loader />}
  <ImageModal
    modelIsOpen={showModal}
    closeModal={closeModal}
    modal={largeImage}
  />
</div>
  );
};

export default App;
