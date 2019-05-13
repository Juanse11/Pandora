const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const defaultApp = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "pandora-1c329",
    clientEmail:
      "firebase-adminsdk-x0pzt@pandora-1c329.iam.gserviceaccount.com",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYQVS9jhsgkOvj\nf8pxDzuY3jSA518vibbxKhEVQ+tR7otGgoJln7pl+KVJfVn5AMejsQFMgHdZHXBa\ncWNLyOhVykbF7B+KRbxu29HHB6Y/xhVFWy/ZMiUqB5nAxQrNmSEwhVT9+Rz+/edw\ns7P2d0GyM5CICE8KAtAUNKGQYhHSodCRYVWmsetGRnQRLuWRvNkxf/LU+rB0S+a/\nVPRaw4dIuBJmrfBSTw5J0zzzgy1R/rMSqwi1+GZ0pi7XyvFQj+LUyhP8NJIUv5Aw\nTuXMiqFnGdyjh0tnrqODt2mWUoMhAE18U5qqR3pp8Hu6Rr/vXWi9OIcCXfJxnHQS\nmYI9fcLPAgMBAAECggEAEz//VNAIwf9Qs7zOfajtYhCGFt4p/LqutKMa8dNah0tf\ntJR/pBWj3YyoaTg+Det5Ukro3SFI9a1xLR407boDFgWzGQcXncXfYyzLwxxGer2y\npsg2roFWjY/Ucrj2+rOnrJjO/CVo8xxrDKbL1BeT6NH4LhrO03czk7pryvN7SWQW\nJwNnZFoEeG/WZo8DbzA9db9cwRAEzK4g5QwlxZmPwlqNn8gaCekfhot15mfMF9nh\nzsbjxdIEhA8JvT3ukSvYGbarZUvo3ynTgmct/mh9qcpP4Y0I44uQxKPwD5tDojC0\nqcPR9tMkViRdtuqdoVsDl5USXhlAXRDDx3AIvuve0QKBgQDLOgKoMEGwZwLP05X5\nSma80wOmNw+VTF8rBkfOBeUGqGrx3kJwieVoa3XmHilQHR10/nItDvwYbuhNkBEA\nGxKRITVj3BWBiR2ws7hSFE9XxKfB6zd8Z2n9E5GuOphiYXW1A09+4gRHt1RiS8aM\ny9i4JD2TwI+8pJeCSlpxdkN7uwKBgQC/yt7xcLXH/RmJOcjPqceJ/JVPIx2nxUcV\nt0n9EB3L1BKMx8OeXneRfOPIWPmj4Bp4ssGVnwVgrlI/Efp1OOAVaDvcLvj/BoNT\n1P1ii/lqj3oGFgU2m0mlQfe82vm7++aTc/78/Y3OP2jhCeUWaCXvW9k2wig5rxPf\nLUfFvAZB/QKBgQCxmbOiufFeMNezOcxRvKSGFb6Vrn6u0bxFhEqSEHKy29ICJ2NW\nqBvUojy5athdy+PnT0oGeJb030+iIOnKdt5F+IiJCVe+CU7qElVdXaRtJk4Y2O93\nh4SHh2eDpG9xYoyUMR1y3CAzcFKNSH1uo+J0Ii+yBNFYYVqKoWHi0CBvawKBgCIG\nsPTuxSFc8unYmZrWCTOe3zJyDXHVWx4sLXE7Kb4eusfFLRxssBPcr2C9AFUljiy5\nsgSEeOTFKIxN+TxQwdiqbGxM3RoJosT9tZKFONPB7qkjwPsGI9Ow123m/4VtVGP2\noVdq+HyN3WKHaeBGy+wiRHAllBNfz0u58dDP4eBVAoGAPrDlWYenZHRK5p4AJsqc\nbVF6QJQyy3u5PFvu+shuqsYejPnqG8zOmBw9dr5Xy7+hWgqJoKMgI1Wflj+pJVeY\ngOmHCr+k9vusaErUHH5Cgzc2h8pGRBO5q9441RfZufH37lna4lUz8PePEMD86HEV\nJmyka2L4DjmW0fZBVWfmq/g=\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://pandora-1c329.firebaseio.com"
});

const userRoutes = require("./api/routes/users");
const postRoutes = require("./api/routes/posts");
const paymentRoutes = require("./api/routes/payments");
const bookingRouter = require("./api/routes/bookings");



require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/bookings", bookingRouter);

const port = process.env.PORT || 8000;
console.log(port);

app.listen(port, () => console.log("[Server] online " + new Date()));
