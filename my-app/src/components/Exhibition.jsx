// import React from "react";
// import "./Exhibition.css";

// function Exhibition() {
//   const exhibitions = [
//     {
//       id: 1,
//       artist: "John Doe",
//       title: "The Art of Pottery",
//       date: "April 15, 2025",
//       location: "Artisan Gallery, NY",
//       description: "A deep dive into traditional and modern pottery techniques.",
//       image: "https://media.istockphoto.com/id/154904182/photo/potter-manufacturing-kitchen-utensils.webp?a=1&b=1&s=612x612&w=0&k=20&c=be5Gi1O4bV5KXSdisGdcFplX3m774wJ5-O_dpA2kBiY="
//     },

//     {
//       id: 2,
//       artist: "Jane Smith",
//       title: "Crafting Wood into Art",
//       date: "May 10, 2025",
//       location: "Woodworks Studio, LA",
//       description: "Handmade furniture and decorative pieces showcase.",
//       image: "https://plus.unsplash.com/premium_photo-1677700640123-beeeffce4944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29vZGNyYWZ0c3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//       id: 3,
//       artist: "Carlos Mendoza",
//       title: "Colors of Life",
//       date: "June 5, 2025",
//       location: "Modern Art Museum, Paris",
//       description: "A journey through vibrant oil and watercolor paintings.",
//       image: "https://images.unsplash.com/photo-1545293527-d41d0c75b9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwYXJ0JTIwbXVzZXVtfGVufDB8fDB8fHww"
//     },
//     {
//       id: 4,
//       artist: "Emily Clarke",
//       title: "The Beauty of Sculpture",
//       date: "July 20, 2025",
//       location: "Sculpture Center, London",
//       description: "Showcasing intricate marble and clay sculptures.",
//       image: "https://media.istockphoto.com/id/678984672/photo/young-sculptor-creates-a-clay-sculpture.webp?a=1&b=1&s=612x612&w=0&k=20&c=0CmK8cnIE1WMVEoB8cS_F-dyJRM31o_dEoxPeGCIKMc="
//     },
//     {
//       id: 5,
//       artist: "Ahmed Khan",
//       title: "Masterpieces in Metal",
//       date: "August 12, 2025",
//       location: "Metalwork Gallery, Dubai",
//       description: "Intricate metalwork and jewelry designs on display.",
//       image: "https://plus.unsplash.com/premium_photo-1667323820153-ae0359d04f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWV0YWx3b3JrJTIwYXJ0fGVufDB8fDB8fHww"
//     },
//     {
//       id: 6,
//       artist: "Sophie Laurent",
//       title: "Threads of Tradition",
//       date: "September 25, 2025",
//       location: "Textile Museum, Milan",
//       description: "A showcase of exquisite handwoven fabrics and textiles.",
//       image: "https://images.unsplash.com/photo-1743012782311-b37269102c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGV4dGlsZWFydHxlbnwwfHwwfHx8MA%3D%3D"
//     }
//   ];

//   return (
//     <div className="exhibition-list">
//       <h2 className="title">Upcoming Exhibitions</h2>
//       <div className="exhibition-container">
//         {exhibitions.map((exhibition) => (
//           <div key={exhibition.id} className="exhibition-card">
//             <img src={exhibition.image} alt={exhibition.title} className="exhibition-image" />
//             <h3 className="exhibition-title">{exhibition.title}</h3>
//             <p className="exhibition-artist">By {exhibition.artist}</p>
//             <p className="exhibition-date">{exhibition.date}</p>
//             <p className="exhibition-location">{exhibition.location}</p>
//             <p className="exhibition-description">{exhibition.description}</p>        
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Exhibition;


import React, { useState } from "react";
import "./Exhibition.css";

const exhibitionsData = [
  {
    id: 1,
    title: "The Art of Pottery",
    date: "April 15, 2025",
    location: "Artisan Gallery, NY",
    price: 500, // Price in INR
    description: "A deep dive into traditional and modern pottery techniques.",
    img: "https://media.istockphoto.com/id/154904182/photo/potter-manufacturing-kitchen-utensils.webp?a=1&b=1&s=612x612&w=0&k=20&c=be5Gi1O4bV5KXSdisGdcFplX3m774wJ5-O_dpA2kBiY=",
  },
  {
    id: 2,
    title: "Crafting Wood into Art",
    date: "May 10, 2025",
    location: "Woodworks Studio, LA",
    price: 700,
    description: "Handmade furniture and decorative pieces showcase.",
    img: "https://plus.unsplash.com/premium_photo-1677700640123-beeeffce4944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29vZGNyYWZ0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Colors of Life",
    date: "June 5, 2025",
    location: "Modern Art Museum, Paris",
    price: 1000,
    description: "A journey through vibrant oil and watercolor paintings.",
    img: "https://images.unsplash.com/photo-1545293527-d41d0c75b9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwYXJ0JTIwbXVzZXVtfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "The Beauty of Sculpture",
    date: "July 20, 2025",
    location: "Sculpture Center, London",
    price: 1000,
    description: "Showcasing intricate marble and clay sculptures.",
    img: "https://media.istockphoto.com/id/678984672/photo/young-sculptor-creates-a-clay-sculpture.webp?a=1&b=1&s=612x612&w=0&k=20&c=0CmK8cnIE1WMVEoB8cS_F-dyJRM31o_dEoxPeGCIKMc=",
  },
  {
    id: 5,
    title: "Masterpieces in Metal",
    date: "August 12, 2025",
    location: "Metalwork Gallery, Dubai",
    price: 1000,
    description: "Intricate metalwork and jewelry designs on display.",
    img: "https://plus.unsplash.com/premium_photo-1667323820153-ae0359d04f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWV0YWx3b3JrJTIwYXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 6,
    title: "Threads of Tradition",
    date: "September 25, 2025",
    location: "Textile Museum, Milan",
    price: 1000,
    description: "A showcase of exquisite handwoven fabrics and textiles.",
    img: "https://images.unsplash.com/photo-1743012782311-b37269102c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGV4dGlsZWFydHxlbnwwfHwwfHx8MA%3D%3D",
  }
];

const Exhibitions = () => {
  const [selectedExhibition, setSelectedExhibition] = useState(null);

  const handlePayment = () => {
    if (!selectedExhibition) return;
  
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };
  
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then((res) => {
      if (!res) {
        alert("Failed to load Razorpay. Check your internet connection.");
        return;
      }
  
      const options = {
        key: "rzp_test_1234567890abcdef", // Replace with your Razorpay Key
        amount: selectedExhibition.price * 100, // Convert to paise
        currency: "INR",
        name: "Artisan Connect",
        description: selectedExhibition.title,
        image: "https://via.placeholder.com/100",
        handler: function (response) {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#ff5733",
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
    });
  };

  return (
    <div className="container">
      <h2 className="title">Exhibitions</h2>
      <div className="exhibitions">
        {exhibitionsData.map((exhibition) => (
          <div
            key={exhibition.id}
            className="card"
            onClick={() => setSelectedExhibition(exhibition)}
          >
            <img src={exhibition.img} alt={exhibition.title} />
            <h3>{exhibition.title}</h3>
            <p>{exhibition.date} - {exhibition.location}</p>
            <p>₹{exhibition.price}</p>
          </div>
        ))}
      </div>

      {selectedExhibition && (
        <div className="details">
          <img src={selectedExhibition.img} alt={selectedExhibition.title} />
          <h2>{selectedExhibition.title}</h2>
          <p>{selectedExhibition.date} - {selectedExhibition.location}</p>
          <p>{selectedExhibition.description}</p>
          <p><strong>Price: ₹{selectedExhibition.price}</strong></p>
          <button className="btn" onClick={handlePayment}>Generate Ticket</button>
          <button className="close-btn" onClick={() => setSelectedExhibition(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Exhibitions;