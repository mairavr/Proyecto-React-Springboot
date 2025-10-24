import React from "react";

const Blog = () => {
  const posts = [
    { id: 1, titulo: "Tendencias 2025", resumen: "Descubre lo nuevo en productos y tecnología." },
    { id: 2, titulo: "Cuidado del planeta", resumen: "Cómo nuestros productos contribuyen al medio ambiente." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="border-b py-3">
          <h2 className="font-bold text-lg">{post.titulo}</h2>
          <p className="text-gray-600">{post.resumen}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
