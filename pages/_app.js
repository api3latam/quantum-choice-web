
import '../styles/style.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/bootstrap.min.css'
import '../styles/responsive.css'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
