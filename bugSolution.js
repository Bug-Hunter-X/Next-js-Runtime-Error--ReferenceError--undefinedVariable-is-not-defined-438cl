```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About() {
  const myVariable = "This variable is now defined"; // Define and initialize the variable
  console.log(myVariable);
  return (
    <div>
      <h1>About Page</h1>
      <p>The variable is: {myVariable}</p>
    </div>
  );
}
```