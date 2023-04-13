import { GitHubBanner, Refine } from "@refinedev/core";
import {
    notificationProvider,
    ThemedLayout,
    ErrorComponent,
    RefineThemes,
} from "@refinedev/antd";
import { AntdInferencer } from "@refinedev/inferencer/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import "@refinedev/antd/dist/reset.css";
import { Users } from "./components/pages/users";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <ConfigProvider theme={RefineThemes.Blue}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(API_URL)}
                    resources={[
                        {
                            name: "samples",
                            list: "/samples",
                            create: "/samples/create",
                            edit: "/samples/edit/:id",
                            show: "/samples/show/:id",
                            meta: {
                                canDelete: true,
                            },
                        },
                        {
                            name: "categories",
                            list: "/categories",
                            create: "/categories/create",
                            edit: "/categories/edit/:id",
                            show: "/categories/show/:id",
                            meta: {
                                canDelete: true,
                            },
                        },
                        {
                            name: "users",
                            list: "/users",
                            create: "/users/create",
                            edit: "/users/edit/:id",
                            show: "/users/show/:id",
                            meta: {
                                canDelete: true,
                            },
                        },
                    ]}
                    notificationProvider={notificationProvider}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                    }}
                >
                    <Routes>
                        <Route
                            element={
                                <ThemedLayout>
                                    <Outlet />
                                </ThemedLayout>
                            }
                        >
                            <Route
                                index
                                element={
                                    <NavigateToResource resource="samples" />
                                }
                            />

                            <Route path="samples">
                                <Route index element={<AntdInferencer />} />
                                <Route
                                    path="create"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer />}
                                />
                            </Route>

                            <Route path="categories">
                                <Route index element={<AntdInferencer />} />
                                <Route
                                    path="create"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer />}
                                />
                            </Route>

                            <Route path="users">
                                <Route index element={<AntdInferencer />} />
                                <Route
                                    path="create"
                                    element={<AntdInferencer />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<Users />}
                                />
                                <Route
                                    path="show/:id"
                                    element={<AntdInferencer />}
                                />
                            </Route>

                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                    <UnsavedChangesNotifier />
                </Refine>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;