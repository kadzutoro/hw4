import { useState } from 'react'
import { useEffect } from 'react'
import ArticleList from './components/ArticleList/ArticleList'
import SearchForm from './components/SearchForm/SearchForm'
import { fetchArticles } from './components/article-api'

import './App.css'

function App() {
  const [page,setPage] = useState(1);
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)  
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => { 
    if(searchQuery === '') {
      return;
    }
    async function getData () {
      try {
        setIsLoading(true);
        setError(false);
      const data = await fetchArticles(searchQuery, page);
      setArticles(prevArticles => {
        return [...prevArticles, ...data]
      });
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    } 
    }
    getData();
  },[searchQuery, page])

  const handleSearch = async (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1)
    setArticles([])
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }



  return (
    <>
      <div>
        <SearchForm onSearch={handleSearch}/>
        {error && <p>Error fetching articles.</p>}
        {articles.length > 0 && <ArticleList items={articles}/>}
        {articles.length > 0 && !isLoading && <button onClick={handleLoadMore}>Load more</button>}
        {isLoading && <p>Loading...</p>}
      </div>
    </>
  )
}

export default App
