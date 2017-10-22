import Loadable from 'react-loadable';
import LoadingIndicator from '../loading';

export default Loadable({
    loader: () => import('./index'),
    loading: LoadingIndicator,
});