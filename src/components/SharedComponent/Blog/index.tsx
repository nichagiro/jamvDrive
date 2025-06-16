// import React from 'react'
// import Link from 'next/link'
// import { Icon } from '@iconify/react'
// import BlogCard from './blogCard'

// const Blog: React.FC = () => {
//   const posts = []

//   return (
//     <section className='flex flex-wrap justify-center py-24 ' id='blog'>
//       <div className='container px-4'>
//         <div className='flex items-baseline justify-between flex-wrap'>
//           <h2
//             className='sm:mb-11 mb-3 text-36 font-bold text-midnight_text dark:text-white'>
//             Latest blog & news
//           </h2>
//           <Link href='#' className='flex items-center gap-3 text-17 text-midnight_text dark:text-white dark:hover:text-primary font-medium hover:text-primary sm:pb-0 pb-3'           >
//             View More
//             <span>
//               <Icon icon='solar:arrow-right-outline' width='30' height='30' />
//             </span>
//           </Link>
//         </div>
//         <div className='grid grid-cols-12 gap-7'>
//           {posts.map((blog, i) => (
//             <div key={i} className='w-full md:col-span-4 col-span-6'>
//               <BlogCard blog={blog} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Blog
