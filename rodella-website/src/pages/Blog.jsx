import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import fixedwing from "../assets/images/fixed-wing2.jpg";
import services from "../assets/images/services.jpg";
import achievment from "../assets/images/achievment.jpg";
import homepagedrone from "../assets/images/homepagedrone.png";
import MQ650LV from "../assets/images/MQ650LV.jpg";
import ServiceImg2 from "../assets/images/ServiceImg2.png";
import design from "../assets/images/design.jpg";
// Sample blog data - you can replace this with your actual blog data
const blogPosts = [
    {
      id: 1,
      title: "The Future of Unmanned Aircraft Systems",
      excerpt:
        "Exploring the latest innovations in drone technology and their impact on various industries.",
      category: "Technology",
      date: "March 15, 2024",
      imageUrl: fixedwing,
      readTime: "5 min read",
      author: "John Smith",
    },
    {
      id: 2,
      title: "Understanding Aircraft Navigation Systems",
      excerpt:
        "A comprehensive guide to modern aircraft navigation technologies and their applications.",
      category: "Education",
      date: "March 12, 2024",
      imageUrl: services,
      readTime: "7 min read",
      author: "Sarah Johnson",
    },
    {
      id: 3,
      title: "Drone Safety Regulations: What You Need to Know",
      excerpt:
        "Essential information about current drone regulations and best practices for safe operation.",
      category: "Safety",
      date: "March 10, 2024",
      imageUrl: ServiceImg2,
      readTime: "6 min read",
      author: "Mike Anderson",
    },
    {
      id: 4,
      title: "Commercial Applications of UAVs",
      excerpt:
        "Discover how businesses are leveraging drone technology to revolutionize their operations.",
      category: "Business",
      date: "March 8, 2024",
      imageUrl: achievment,
      readTime: "8 min read",
      author: "Emily Chen",
    },
    {
      id: 5,
      title: "How AI is Transforming Aviation",
      excerpt:
        "An in-depth look at how artificial intelligence is reshaping the aviation industry, from autopilot systems to predictive maintenance.",
      category: "Technology",
      date: "March 5, 2024",
      imageUrl: design,
      readTime: "7 min read",
      author: "David Lee",
    },
    {
      id: 6,
      title: "The Role of Drones in Disaster Management",
      excerpt:
        "Exploring how drones are being used for disaster relief, search-and-rescue operations, and emergency response.",
      category: "Emergency Response",
      date: "March 2, 2024",
      imageUrl: MQ650LV,
      readTime: "6 min read",
      author: "Sophia Martinez",
    },
    {
      id: 7,
      title: "Future Trends in Aerospace Engineering",
      excerpt:
        "A look at upcoming technological advancements in aerospace engineering, including supersonic travel and sustainable aviation.",
      category: "Engineering",
      date: "February 28, 2024",
      imageUrl: homepagedrone,
      readTime: "9 min read",
      author: "Robert Walker",
    },
  ];
  

const Blog = () => {
  return (
    <section className="bg-black text-white min-h-screen pt-2">
      <Navbar />

      {/* Page Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Our Past Works</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore the latest insights, news, and developments in the world of
          aircraft and drone technology
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm ml-4">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm">
                      {post.readTime}
                    </span>
                    {/* <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-400 text-sm">{post.author}</span> */}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
