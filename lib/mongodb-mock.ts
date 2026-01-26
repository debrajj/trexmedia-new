// Mock MongoDB for development without MongoDB installed
// This allows the app to run without a real database

let mockConnected = false;

async function connectDBMock() {
  if (mockConnected) {
    console.log('✅ Mock MongoDB already connected');
    return { connection: { readyState: 1 } };
  }

  console.log('⚠️  WARNING: Using mock MongoDB connection');
  console.log('📝 To use real MongoDB, install it or run: docker run -d -p 27017:27017 mongo');
  
  mockConnected = true;
  
  return {
    connection: { readyState: 1 },
    models: {},
  };
}

export default connectDBMock;
