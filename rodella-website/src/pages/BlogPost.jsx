import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

// Sample detailed blog data - you can replace this with your actual blog data or fetch from an API
const blogPostsData = {
    1: {
        title: "The Revolutionary Future of Unmanned Aircraft Systems",
        content: `
          The world of unmanned aircraft systems (UAS) is experiencing unprecedented transformation, revolutionizing industries and redefining technological boundaries. From sophisticated delivery networks to high-precision agricultural monitoring, drones are fundamentally reshaping our approach to traditional tasks and opening doors to possibilities previously considered impossible.
    
          Key Innovations:
          1. Advanced Autonomous Systems
          - State-of-the-art collision avoidance utilizing multiple sensor arrays (LiDAR, infrared, ultrasonic, and optical) working in concert to create comprehensive environmental awareness
          - Intelligent path planning algorithms that incorporate real-time weather data, traffic patterns, and mission-specific variables to optimize flight paths dynamically
          - Enhanced object recognition powered by deep learning neural networks capable of identifying thousands of object categories with near-human accuracy at high speeds and in challenging conditions
          - Self-learning capabilities that allow systems to improve performance over time through operational experience
    
          2. Extended Flight Capabilities
          - Revolutionary battery technologies including next-generation lithium-sulfur and solid-state batteries extending flight times from minutes to hours
          - Hybrid power systems combining electric motors with sustainable fuel sources for extended endurance missions
          - All-weather operation through ruggedized components, advanced waterproofing, and thermal management systems enabling performance in extreme environments from arctic cold to desert heat
          - Dramatically increased payload capacity through lightweight composite materials and aerodynamic refinements, transforming drones from simple cameras to versatile transport platforms
          - Reduced noise signatures through advanced propeller designs and sound-dampening technologies
    
          3. Integration with Artificial Intelligence
          - Edge computing capabilities enabling real-time data processing directly on the aircraft without reliance on ground systems
          - Sophisticated predictive maintenance algorithms that continuously monitor component health, identifying potential failures before they occur
          - Advanced automated decision-making frameworks that can assess complex situations and take appropriate actions according to predefined parameters
          - Natural language processing allowing for intuitive voice control and more natural human-machine interaction
          - Computer vision systems that can interpret complex scenes and extract actionable intelligence from visual data
    
          The impact of these innovations extends far beyond incremental technological advancement. Industries across the spectrum are implementing drone solutions that are transforming operations, creating new business models, and solving previously intractable problems:
    
          • Healthcare organizations are deploying emergency medical drones that deliver critical supplies and equipment to remote locations or disaster zones within minutes
          • Agricultural enterprises are implementing precision farming systems that monitor crop health down to individual plants, applying resources with unprecedented efficiency
          • Energy companies are utilizing inspection drones that can safely examine power lines, wind turbines, and solar arrays without putting human workers at risk
          • Conservation groups are employing specialized monitoring drones to track wildlife populations, detect poaching, and assess environmental changes in sensitive ecosystems
          • Entertainment and media companies are capturing breathtaking aerial perspectives that were previously impossible or prohibitively expensive
    
          As UAS technology continues its rapid evolution, we stand at the threshold of a new era where intelligent, autonomous aircraft will become an integral part of our daily lives and industrial operations, solving challenges and creating opportunities that we are only beginning to imagine.
        `,
        category: "Technology",
        date: "March 15, 2024",
        imageUrl: "/src/assets/images/fixed-wing2.jpg",
        author: "Dr. John Smith, Aerospace Engineering Specialist",
        readTime: "8 min read",
        tags: ["Drones", "Technology", "Innovation", "UAS", "Autonomous Systems", "AI Integration"],
      },
    2: {
      title: "Understanding Aircraft Navigation Systems",
      content: `
        Modern aircraft navigation has come a long way from the early days of celestial navigation. Today's systems combine multiple technologies to ensure precise and reliable navigation.
  
        Core Navigation Systems:
        1. GPS and Satellite Navigation
        - Global coverage
        - High accuracy
        - Redundant systems
  
        2. Inertial Navigation Systems
        - Independent operation
        - No external signals required
        - Continuous position updates
  
        3. Radio Navigation
        - Traditional but reliable
        - Ground-based support
        - Backup capabilities
  
        The integration of these systems provides pilots and autonomous aircraft with unprecedented accuracy and reliability in navigation.
      `,
      category: "Education",
      date: "March 12, 2024",
      imageUrl: "/src/assets/images/services.jpg",
      author: "Sarah Johnson",
      readTime: "7 min read",
      tags: ["Navigation", "Aviation", "Technology", "Education"],
    },
    3: {
      title: "Drone Safety Regulations: What You Need to Know",
      content: `
        As drones become more accessible, safety regulations are crucial to prevent accidents and misuse. Governments worldwide are enforcing strict rules to ensure responsible drone operations.
  
        Important Regulations:
        1. Registration and Licensing
        - Mandatory drone registration
        - Pilot certification requirements
        - Flight permission protocols
  
        2. Flight Restrictions
        - No-fly zones around airports and sensitive locations
        - Altitude limits to prevent collisions
        - Weather-related restrictions
  
        3. Operational Safety
        - Pre-flight inspections
        - Emergency landing protocols
        - Privacy and data security measures
  
        Staying informed about these regulations is essential for both recreational and commercial drone operators to ensure safe and legal flights.
      `,
      category: "Safety",
      date: "March 10, 2024",
      imageUrl: "/src/assets/images/ServiceImg2.png",
      author: "Mike Anderson",
      readTime: "6 min read",
      tags: ["Drones", "Safety", "Regulations", "Compliance"],
    },
    4: {
      title: "Commercial Applications of UAVs",
      content: `
        Unmanned Aerial Vehicles (UAVs) are revolutionizing businesses by improving efficiency, reducing costs, and enabling new operational capabilities.
  
        Key Applications:
        1. Agriculture
        - Precision farming techniques
        - Crop health monitoring
        - Automated irrigation systems
  
        2. Infrastructure and Construction
        - Aerial site surveys
        - Structural inspections
        - 3D mapping and modeling
  
        3. Logistics and Delivery
        - Faster package deliveries
        - Reduced transportation costs
        - Enhanced supply chain management
  
        As drone technology advances, more industries will adopt UAV solutions, making them an integral part of modern business operations.
      `,
      category: "Business",
      date: "March 8, 2024",
      imageUrl: "/src/assets/images/achievment.jpg",
      author: "Emily Chen",
      readTime: "8 min read",
      tags: ["Drones", "Business", "Technology", "UAV"],
    },
    5: {
      title: "How AI is Transforming Aviation",
      content: `
        Artificial intelligence (AI) is driving innovation in aviation, optimizing operations and enhancing safety. AI-powered systems are changing the way aircraft are managed, maintained, and piloted.
  
        Key AI Innovations:
        1. Autonomous Flight Systems
        - Self-learning autopilot technology
        - AI-assisted decision-making
        - Enhanced flight efficiency
  
        2. Predictive Maintenance
        - Early fault detection
        - AI-powered diagnostics
        - Reduced aircraft downtime
  
        3. Air Traffic Management
        - AI-based traffic predictions
        - Automated scheduling
        - Collision avoidance systems
  
        AI is making aviation smarter, safer, and more efficient, setting the stage for the future of air travel.
      `,
      category: "Technology",
      date: "March 5, 2024",
      imageUrl: "/src/assets/images/2.png",
      author: "David Lee",
      readTime: "7 min read",
      tags: ["AI", "Aviation", "Technology", "Innovation"],
    },
    6: {
      title: "The Role of Drones in Disaster Management",
      content: `
        Drones are playing an essential role in disaster management by providing real-time data, improving search and rescue missions, and delivering aid efficiently.
  
        Key Applications:
        1. Search and Rescue
        - Locating missing persons
        - Thermal imaging for night operations
        - Rapid response deployment
  
        2. Damage Assessment
        - Aerial surveys of affected areas
        - Structural integrity analysis
        - Quick decision-making support
  
        3. Emergency Deliveries
        - Medical supply transport
        - Food and water distribution
        - Critical infrastructure repair assistance
  
        Drones are proving to be invaluable tools in saving lives and mitigating damage during emergencies.
      `,
      category: "Emergency Response",
      date: "March 2, 2024",
      imageUrl: "/src/assets/images/MQ650LV.jpg",
      author: "Sophia Martinez",
      readTime: "6 min read",
      tags: ["Drones", "Disaster Management", "Emergency Response", "Technology"],
    },
    7: {
      title: "Future Trends in Aerospace Engineering",
      content: `
        Aerospace engineering is rapidly advancing, with new trends shaping the future of flight. From sustainable aviation to hypersonic travel, the industry is evolving at an unprecedented pace.
  
        Major Trends:
        1. Sustainable Aviation
        - Hydrogen-powered aircraft
        - Electric propulsion systems
        - Carbon-neutral initiatives
  
        2. Supersonic and Hypersonic Travel
        - Next-generation supersonic jets
        - Reduced flight durations
        - Noise reduction technologies
  
        3. Space Exploration Innovations
        - Reusable rocket technology
        - Lunar and Mars missions
        - Advanced propulsion systems
  
        These advancements are redefining aerospace engineering, paving the way for a new era of air and space travel.
      `,
      category: "Engineering",
      date: "February 28, 2024",
      imageUrl: "/src/assets/images/homepagedrone.png",
      author: "Robert Walker",
      readTime: "9 min read",
      tags: ["Aerospace", "Engineering", "Technology", "Innovation"],
    },
  };
  
  

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPostsData[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="text-blue-400 hover:text-blue-300"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 max-w-4xl"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-500 text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-400">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <button
            onClick={() => navigate("/blog")}
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            ← Back to Blog
          </button>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogPost;
