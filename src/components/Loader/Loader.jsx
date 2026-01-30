import { MagnifyingGlass } from "react-loader-spinner";
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.loaderWrapper}>
            <MagnifyingGlass
                visible={true}
                height="60"
                width="60"
                ariaLabel="loading"
                wrapperStyle={{}}
                colors={['#306cce', '#72a1ed']}
            />
        </div>
    );
}