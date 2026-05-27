import Image from "next/image";
import { Clock, Eye } from "lucide-react";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  readTime: number;
  views: number;
  date: string;
  author: { name: string; avatar: string };
  featured?: boolean;
}

interface FeedCardProps {
  post: Post;
  featured?: boolean;
}

export default function FeedCard({ post, featured }: FeedCardProps) {
  if (featured) {
    return (
      <a
        href="#"
        className="group col-span-2 relative rounded-2xl overflow-hidden aspect-[16/7] block"
      >
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 max-w-xl">
          <span className="bg-indigo-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
            {post.category}
          </span>
          <h2 className="text-white text-xl font-bold mt-2 leading-snug">{post.title}</h2>
          <p className="text-white/70 text-sm mt-1.5 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-3 mt-3 text-white/60 text-xs">
            <span className="flex items-center gap-1">
              <Clock size={11} /> {post.readTime} min read
            </span>
            <span className="flex items-center gap-1">
              <Eye size={11} /> {post.views.toLocaleString()}
            </span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href="#"
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
          {post.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-500 text-xs mt-1.5 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden relative">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span className="text-xs text-gray-500">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <span className="flex items-center gap-0.5">
              <Clock size={10} /> {post.readTime}m
            </span>
            <span className="flex items-center gap-0.5">
              <Eye size={10} /> {post.views.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
