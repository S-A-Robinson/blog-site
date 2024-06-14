import Image from "next/image";
import { Metadata } from "next";
import TableOfContent from "./components/TableOfContent/TableOfContent";

export const metadata: Metadata = {
  title: 'Blog Post'
}

const sections = ['Introduction', 'main', 'Conclusion']

export default function Home() {
  return (
    <main className="h-screen bg-slate-950 flex flex-col p-4 gap-4 text-slate-50 font-sans md:flex-row">
      <nav className="w-24 h-100 bg-slate-800 rounded"></nav>
      <TableOfContent sections={sections} />
      <div className="w-full max-h-screen overflow-hidden rounded">
        <article id='article' className="w-full h-full p-8 bg-slate-800 overflow-auto no-scrollbar scroll-smooth motion-reduce:scroll-auto">
          <h1 className='text-6xl mb-4'>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p id="www">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi et esse dolor eius quam totam nemo nihil rerum quibusdam ipsam saepe, nobis veritatis, maiores culpa optio excepturi? Illum, nulla ratione.</p>
        </article>
      </div>
    </main>
  );
}
