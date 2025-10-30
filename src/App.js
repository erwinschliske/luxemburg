import React, { useEffect, useState } from "react";

// Hilfsfunktion, um alle Bilddateien aus /public/images zu laden
function getImageList() {
  // Die Bilder liegen im public/images Ordner und werden nicht direkt importiert,
  // sondern als statische Ressourcen geladen
  // Hier werden die Dateinamen angenommen, z.B. image1.jpg, image2.jpg, ...
  // Alternativ kann man die Dateinamen dynamisch generieren oder aus einer API laden
  // Für die Demo nehmen wir Platzhalter
  return [
    "images/image01.jpg",
    "images/image02.jpg",
    "images/image03.jpg",
    "images/image04.jpg",
    "images/image05.jpg",
    "images/image06.jpg",
    "images/image07.jpg",
    "images/image08.jpg",
    "images/image09.jpg",
    "images/image10.jpg",
    "images/image11.jpg"
  ];
}

export default function App() {
  const images = getImageList();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) {
    return <div>Keine Bilder gefunden.</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
      <h1>Bilder Slideshow</h1>
      <img
        src={images[current]}
        alt={`Bild ${current + 1}`}
        style={{ maxWidth: '80vw', maxHeight: '60vh', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
      />
      <div style={{ marginTop: 20 }}>
        Bild {current + 1} von {images.length}
      </div>
    </div>
  );
}
