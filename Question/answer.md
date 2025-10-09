
## ✅ **Final Solution**

### **index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Product Gallery</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="header">
    <div class="logo">ShopEase</div>
    <nav class="nav">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main class="gallery">
    <div class="card">
      <span class="badge">SALE</span>
      <img src="https://via.placeholder.com/300x200" alt="Product 1" />
      <h3>Product One</h3>
      <p>$25.00</p>
      <button>Buy Now</button>
    </div>
    <div class="card">
      <span class="badge">SALE</span>
      <img src="https://via.placeholder.com/300x200" alt="Product 2" />
      <h3>Product Two</h3>
      <p>$30.00</p>
      <button>Buy Now</button>
    </div>
    <div class="card">
      <span class="badge">SALE</span>
      <img src="https://via.placeholder.com/300x200" alt="Product 3" />
      <h3>Product Three</h3>
      <p>$40.00</p>
      <button>Buy Now</button>
    </div>
    <div class="card">
      <span class="badge">SALE</span>
      <img src="https://via.placeholder.com/300x200" alt="Product 4" />
      <h3>Product Four</h3>
      <p>$45.00</p>
      <button>Buy Now</button>
    </div>
    <div class="card">
      <span class="badge">SALE</span>
      <img src="https://via.placeholder.com/300x200" alt="Product 5" />
      <h3>Product Five</h3>
      <p>$35.00</p>
      <button>Buy Now</button>
    </div>
    <div class="card">
      <span class="badge">SALE</span>
      <img src="https://via.placeholder.com/300x200" alt="Product 6" />
      <h3>Product Six</h3>
      <p>$50.00</p>
      <button>Buy Now</button>
    </div>
  </main>
</body>
</html>
```

---

### **style.css**

```css
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f5f5f5;
}

/* Header (Flexbox) */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: white;
  padding: 1rem 2rem;
}

.nav a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

.nav a:hover {
  text-decoration: underline;
}

/* Product Gallery (Grid) */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
  padding-bottom: 1rem;
}

.card img {
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

/* SALE Badge (Positioning) */
.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: red;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
}

/* Buttons */
button {
  background-color: #222;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}

/* Media Queries */
@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gallery {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;
    text-align: center;
  }

  .nav {
    margin-top: 10px;
  }

  .nav a {
    display: block;
    margin: 5px 0;
  }
}
```

---

## 🧠 **Concepts Tested**

| Concept       | Description                             |
| ------------- | --------------------------------------- |
| Flexbox       | Header layout (logo + nav)              |
| Grid          | Product card arrangement                |
| Positioning   | “SALE” badge using absolute positioning |
| Media Queries | Responsive layout adjustment            |

---

