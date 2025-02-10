import React, { PureComponent } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthenticationLayout from '../layouts/AuthenticationLayout';
import SignIn from '../components/authentication/SignIn';
import MainLayout from '../layouts/MainLayout';
import Services from '../components/configuration/Services';
import Fonction from '../components/configuration/Fonction';
import ListeEmploye from '../components/employe/ListeEmploye';
import CreerEmploye from '../components/employe/CreerEmploye';
const isAuthenticated = true;

var AppRoutes = () => {

    return (

        <Routes>
            <Route path="/"
                element={
                    <AuthenticationLayout>
                        <SignIn></SignIn>
                    </AuthenticationLayout>
                }
            />




            {isAuthenticated ? (
                <>
                    <Route path="/services"
                        element={
                            <MainLayout>
                                <Services />
                            </MainLayout>
                        }
                    />
                     <Route path="/fonction"
                        element={
                            <MainLayout>
                                <Fonction />
                            </MainLayout>
                        }
                    />
                     <Route path="/employes"
                        element={
                            <MainLayout>
                                <ListeEmploye />
                            </MainLayout>
                        }
                    />
                    <Route path="/creerEmploye"
                        element={
                            <MainLayout>
                                <CreerEmploye />
                            </MainLayout>
                        }
                    />
                </>
            ) : (
                <Route path="/"
                    element={
                        <AuthenticationLayout>
                            <SignIn />
                        </AuthenticationLayout>
                    }
                />
            )

            };





















        </Routes>





    )
}

export default AppRoutes;