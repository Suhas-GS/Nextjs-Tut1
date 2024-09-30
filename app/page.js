// useState

// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [marks, setmarks] = useState(50)
//   return (
//     <>
//       <h1>My marks is {marks}</h1>
//       <button onClick={()=>{setmarks(marks+1)}}>
//         Update
//       </button>
//     </>
//   )
// }

// export default page

//-------------------------------------------------------------------------------------

//Components

// import Header from '@/Components/Header'
// import React from 'react'

// const page = () => {
//   return (
//     <>
//       <Header />
//       <p>Inside page.js</p>
//     </>
//   )
// }

// export default page

//----------------------------------------------------------------------------------------

// Props
// "use client"
// import Header from '@/Components/Header'
// import React, { useState } from 'react'

// const page = () => {
//   const [user, setUser] = useState("Suhas")
//   const [editor, setEditor] = useState("Otaku")
//   return (
//     <div>
//       <Header user={user} editor={editor}/>
//       <p>Inside page</p>
//     </div>
//   )
// }

// export default page

//----------------------------------------------------------------------------------

//Routing

// import React from 'react'
// import Link from "next/link";

// const page = () => {
//   return (
//     <div className='header_class'>
//       <Link href="/About">About</Link>
//       <Link href="/Courses">Courses</Link>
//       <Link href="/Product">Product</Link>
//     </div>
//   )
// }

// export default page

//--------------------------------------------------------------------------

// Implementing ajax in React (fetch/Axios)
// "use client"
// import axios from "axios";
// import React, { useState } from 'react'

// const page = () => {
//   const [Images, setImages] = useState([])
//   const getImages = async () => {
//     try {
//       const res = await axios.get("https://picsum.photos/v2/list")
//       const data = res.data
//       setImages(data)
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <div>
//       <button onClick={getImages}>
//         GetImages
//       </button>
//       <div>
//         {
//           Images.map((element,i)=>{
//             return <img key={i} src={element.download_url} width={300} height={300} />
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default page
