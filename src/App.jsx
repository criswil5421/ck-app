import {Provider} from "react-redux";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { store } from "./redux";
import { MainLayout } from "./views";
const queryClient=new QueryClient();

const App=() => {
	return (
		<Provider store={store()}>
        <QueryClientProvider client={queryClient}>
          <MainLayout />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
		</Provider>
	);
};

export default App;

