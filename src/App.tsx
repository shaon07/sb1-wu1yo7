import RootLayout from "./components/Layout/RootLayout";
import HomePage from "./components/Pages/Homepage";
import HomepageTemplate from "./components/Templates/HomepageTemplate";

function App() {
  return (
    <RootLayout>
      <HomepageTemplate>
        <HomePage />
      </HomepageTemplate>
    </RootLayout>
  );
}

export default App;
