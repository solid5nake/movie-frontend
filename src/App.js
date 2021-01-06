import React from "react";
import Nav from "./Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// eigen import //
import About from "./About";
import Shop from "./Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Hey BingeWatch Clone</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, iure
      rem ratione placeat aliquid asperiores laboriosam, quod et iusto, labore
      ex beatae aliquam quam illum? Non ad cupiditate recusandae perspiciatis!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      excepturi alias aliquid dicta placeat tenetur ea a commodi. Eaque
      reiciendis maiores rerum corporis et voluptas labore totam repudiandae
      sint pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Libero perspiciatis quibusdam incidunt quia minima mollitia modi non amet
      ducimus quisquam atque accusamus repellendus, saepe officiis delectus
      dicta architecto deserunt omnis! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aspernatur excepturi quas, error amet placeat ex fuga
      tenetur assumenda, voluptate eaque inventore porro. Assumenda natus porro
      neque necessitatibus veniam dignissimos obcaecati. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Accusamus doloribus nam cum ipsum. Fuga
      nesciunt, pariatur eos aut dicta itaque in consequuntur, voluptas illo
      sapiente totam voluptatem, ea alias blanditiis?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, iure
      rem ratione placeat aliquid asperiores laboriosam, quod et iusto, labore
      ex beatae aliquam quam illum? Non ad cupiditate recusandae perspiciatis!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      excepturi alias aliquid dicta placeat tenetur ea a commodi. Eaque
      reiciendis maiores rerum corporis et voluptas labore totam repudiandae
      sint pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Libero perspiciatis quibusdam incidunt quia minima mollitia modi non amet
      ducimus quisquam atque accusamus repellendus, saepe officiis delectus
      dicta architecto deserunt omnis! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aspernatur excepturi quas, error amet placeat ex fuga
      tenetur assumenda, voluptate eaque inventore porro. Assumenda natus porro
      neque necessitatibus veniam dignissimos obcaecati. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Accusamus doloribus nam cum ipsum. Fuga
      nesciunt, pariatur eos aut dicta itaque in consequuntur, voluptas illo
      sapiente totam voluptatem, ea alias blanditiis?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, iure
      rem ratione placeat aliquid asperiores laboriosam, quod et iusto, labore
      ex beatae aliquam quam illum? Non ad cupiditate recusandae perspiciatis!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      excepturi alias aliquid dicta placeat tenetur ea a commodi. Eaque
      reiciendis maiores rerum corporis et voluptas labore totam repudiandae
      sint pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Libero perspiciatis quibusdam incidunt quia minima mollitia modi non amet
      ducimus quisquam atque accusamus repellendus, saepe officiis delectus
      dicta architecto deserunt omnis! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aspernatur excepturi quas, error amet placeat ex fuga
      tenetur assumenda, voluptate eaque inventore porro. Assumenda natus porro
      neque necessitatibus veniam dignissimos obcaecati. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Accusamus doloribus nam cum ipsum. Fuga
      nesciunt, pariatur eos aut dicta itaque in consequuntur, voluptas illo
      sapiente totam voluptatem, ea alias blanditiis?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, iure
      rem ratione placeat aliquid asperiores laboriosam, quod et iusto, labore
      ex beatae aliquam quam illum? Non ad cupiditate recusandae perspiciatis!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      excepturi alias aliquid dicta placeat tenetur ea a commodi. Eaque
      reiciendis maiores rerum corporis et voluptas labore totam repudiandae
      sint pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Libero perspiciatis quibusdam incidunt quia minima mollitia modi non amet
      ducimus quisquam atque accusamus repellendus, saepe officiis delectus
      dicta architecto deserunt omnis! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aspernatur excepturi quas, error amet placeat ex fuga
      tenetur assumenda, voluptate eaque inventore porro. Assumenda natus porro
      neque necessitatibus veniam dignissimos obcaecati. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Accusamus doloribus nam cum ipsum. Fuga
      nesciunt, pariatur eos aut dicta itaque in consequuntur, voluptas illo
      sapiente totam voluptatem, ea alias blanditiis?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, iure
      rem ratione placeat aliquid asperiores laboriosam, quod et iusto, labore
      ex beatae aliquam quam illum? Non ad cupiditate recusandae perspiciatis!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      excepturi alias aliquid dicta placeat tenetur ea a commodi. Eaque
      reiciendis maiores rerum corporis et voluptas labore totam repudiandae
      sint pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Libero perspiciatis quibusdam incidunt quia minima mollitia modi non amet
      ducimus quisquam atque accusamus repellendus, saepe officiis delectus
      dicta architecto deserunt omnis! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aspernatur excepturi quas, error amet placeat ex fuga
      tenetur assumenda, voluptate eaque inventore porro. Assumenda natus porro
      neque necessitatibus veniam dignissimos obcaecati. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Accusamus doloribus nam cum ipsum. Fuga
      nesciunt, pariatur eos aut dicta itaque in consequuntur, voluptas illo
      sapiente totam voluptatem, ea alias blanditiis?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, iure
      rem ratione placeat aliquid asperiores laboriosam, quod et iusto, labore
      ex beatae aliquam quam illum? Non ad cupiditate recusandae perspiciatis!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      excepturi alias aliquid dicta placeat tenetur ea a commodi. Eaque
      reiciendis maiores rerum corporis et voluptas labore totam repudiandae
      sint pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Libero perspiciatis quibusdam incidunt quia minima mollitia modi non amet
      ducimus quisquam atque accusamus repellendus, saepe officiis delectus
      dicta architecto deserunt omnis! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aspernatur excepturi quas, error amet placeat ex fuga
      tenetur assumenda, voluptate eaque inventore porro. Assumenda natus porro
      neque necessitatibus veniam dignissimos obcaecati. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Accusamus doloribus nam cum ipsum. Fuga
      nesciunt, pariatur eos aut dicta itaque in consequuntur, voluptas illo
      sapiente totam voluptatem, ea alias blanditiis?
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, iure
      rem ratione placeat aliquid asperiores laboriosam, quod et iusto, labore
      ex beatae aliquam quam illum? Non ad cupiditate recusandae perspiciatis!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      excepturi alias aliquid dicta placeat tenetur ea a commodi. Eaque
      reiciendis maiores rerum corporis et voluptas labore totam repudiandae
      sint pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Libero perspiciatis quibusdam incidunt quia minima mollitia modi non amet
      ducimus quisquam atque accusamus repellendus, saepe officiis delectus
      dicta architecto deserunt omnis! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aspernatur excepturi quas, error amet placeat ex fuga
      tenetur assumenda, voluptate eaque inventore porro. Assumenda natus porro
      neque necessitatibus veniam dignissimos obcaecati. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Accusamus doloribus nam cum ipsum. Fuga
      nesciunt, pariatur eos aut dicta itaque in consequuntur, voluptas illo
      sapiente totam voluptatem, ea alias blanditiis?
    </p>

  </div>
);

export default App;
