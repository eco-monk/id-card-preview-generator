import './App.css';
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import { ChristPreview } from './christ';

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
      https://eco-monk.github.io/id-card-preview-generator/#/home/christ/1/Anand/B.E.%20(CSE)/01-06-2026/11-12-1995/O+/34, G.K.Street, Kakapalayam main road, Salem - 637501/9095558504
      https://eco-monk.github.io/id-card-preview-generator/#/home/christ/2/Deepa/B.E.%20(CSE)/01-06-2028/23-04-1998/B+/23, Behind Leela palace, Bangalore/7876876887
      */
      path: "home/:institution/:regNo/:name/:course/:validity/:dob/:blood/:address/:mobile",
      element: <ChristPreview />,
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}
