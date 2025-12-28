
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Set to true to enable maintenance mode
  const MAINTENANCE_MODE = true;
  
  if (MAINTENANCE_MODE) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Maintenance</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            .container {
              text-align: center;
              color: white;
              padding: 40px;
            }
            h1 {
              font-size: 48px;
              margin-bottom: 20px;
            }
            p {
              font-size: 20px;
              opacity: 0.9;
            }
            .spinner {
              margin: 30px auto;
              width: 50px;
              height: 50px;
              border: 5px solid rgba(255,255,255,0.3);
              border-top-color: white;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🔧 Maintenance Ongoing</h1>
            <div class="spinner"></div>
            <p>We're currently performing maintenance.</p>
            <p>Please check back soon!</p>
          </div>
        </body>
      </html>`,
      {
        status: 503,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  }
  
  return NextResponse.next();
}

// Configure which routes to apply middleware to
export const config = {
  matcher: '/:path*',
};