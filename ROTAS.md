```
*Steps About Routes*

SSR -> Server Side Rendering;
CSR -> Client Side Rendering;

Static / SSG -> Static Site Generator:
    - I've HTML READY! I return it.

Dynamic <- Nothing is Ready! The system build them.

ISR <- Incremental Static Regeneration; (by time)
    - Join Static to Dynamic
    - / <- Static -> After n seconds, update the content;

ISR -> Incremental Static Regenerator (by update)
    - Recheck about some condition;

/ (Public)
/post/[slug] (Public)

/admin/post (Private - Dynamic) - Read (R) Posts List / Delete (D)
/admin/post/[id] (Private - Dynamic) - Update (U)
/admin/post/new (Private - Dynamic) - Create (C)

/admin/login (Dynamic - Public) - Make user admin login
```
