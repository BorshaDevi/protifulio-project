const Blog=()=>{
    return(
        <>

<div id='Blog' className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.ibb.co.com/1z79Fjd/blog-website-development-data-network-concept.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl text-cyan-600 font-bold">Unlocking the Power of Next.js: A Game-Changer for Modern Web Development</h1>
      <p className="py-6">
      Next.js, developed by Vercel, is a popular React framework designed to streamline web development with features like server-side rendering (SSR), static site generation (SSG), and API routes. SSR improves SEO by delivering pre-rendered HTML, making sites more search-engine-friendly, while SSG enhances performance by pre-rendering pages at build time, offering fast load times. The framework also introduces a file-based routing system, automatically generating routes based on the file structure, making navigation setup effortless.

Next.js offers API routes for building serverless APIs directly within the project, allowing for full-stack development without a separate backend. Other standout features include automatic code splitting for faster load times, image optimization to ensure responsive images, and built-in support for CSS, Sass, and TypeScript. With its flexibility and performance enhancements, Next.js is perfect for projects like blogs, e-commerce sites, and dynamic web apps, empowering developers to create scalable, SEO-friendly applications easily.
      </p>
      
    </div>
  </div>
</div>
        </>
    )
}
export default Blog;