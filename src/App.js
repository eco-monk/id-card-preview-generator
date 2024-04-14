import './App.scss';
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import { ChristPreview } from './christ';
import { TemplateCreator } from './TemplateCreator';

export default function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
        </div>
      ),
    },
    {
      /*
      old deployment
      https://eco-monk.github.io/id-card-preview-generator/#/home/christ/1/Anand/B.E.%20CSE/35896/O-ve/G.K.Street,%20Kakapalayam%20main%20road,%20Salem%20-%20637501/9095558504
      https://eco-monk.github.io/id-card-preview-generator/#/home/christ/1/Anand/B.E.%20(CSE)/01-06-2026/11-12-1995/O+/34,%20G.K.Street,%20Kakapalayam%20main%20road,%20Salem%20-%20637501/9095558504
      
      =HYPERLINK(CONCATENATE("https://eco-monk.github.io/id-card-preview-generator/#/home/christ/", A2, "/", B2, "/", C2, "/", D2, "/", E2, "/", F2, "/", G2, "/", H2), "Preview")

      current
      https://eco-monk.github.io/id-card-preview-generator/#/christ/1/Anand/B.E.%20(CSE)/01-06-2026/11-12-1995/O+/34, G.K.Street, Kakapalayam main road, Salem - 637501/9095558504
      https://eco-monk.github.io/id-card-preview-generator/#/christ/2/Deepa/B.E.%20(CSE)/01-06-2028/23-04-1998/B+/23, Behind Leela palace, Bangalore/7876876887
      
      =HYPERLINK(CONCATENATE("https://eco-monk.github.io/id-card-preview-generator/#/christ/", A2, "/", B2, "/", C2, "/", D2, "/", E2, "/", F2, "/", G2, "/", H2), "Preview")
      */
      path: "christ/:regNo/:name/:course/:validity/:dob/:blood/:address/:mobile",
      element: <ChristPreview />,
    },
    {
      path: "template-creator",
      element: <TemplateCreator></TemplateCreator>
    },
  ]);

  // link with google sheet API
  // create and store routes
    // deal with parameters (base 64 enconding and decoding)
    // use search params instead
  // JSON structure to store element config
    // create div (text) and images with pixel placement by drag and drop
  // image over image for masking
  // image over text for masking
  // update layouts

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}
