import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';

// type Props = {
//     children: React.ReactNode;
// }

const Layout = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <Hero />  
        {/* <Hero2 />     */}
        {/* <Hero3 /> */}
    </div>
  )
}

export default Layout
