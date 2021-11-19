import 'tailwindcss/tailwind.css'
import '../styles.css'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function MyApp({ Component, pageProps }) {

  return (
  
  <>
       <Component {...pageProps} >

       </Component>


 

  </>
 
  )
}



export default MyApp
