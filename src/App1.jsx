import { BrowserRouter, Routes, Route, Link } from 'react-router';
import GlobalStyle from './styled/GlobalStyle';
import MainHome from './pages/home/main/MainHome';
import AboutP from './pages/about/AboutP';
import ContentDetail from './pages/contents/ContentDetail';
import Layout from './common/Layout';
import ContentList from './pages/contents/ContentList';
import MovieHome from './pages/home/movie/MovieHome';
import SeriesHome from './pages/home/series/SeriesHome';
import Membership from './pages/member/Membership';
import ProfileInfoEdit from './pages/member/ProfileInfoEdit';

const App1 = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<MainHome />} />
                        <Route path='/membership' element={<Membership />} />
                        <Route path='/moviehome' element={<MovieHome />} />
                        <Route path='/serieshome' element={<SeriesHome />} />
                        <Route path='/about' element={<AboutP />} />
                        <Route path='/detail'>
                            <Route index element={<ContentDetail />} />
                            {/* <Route path=':name' element={<Project />} /> */}
                        </Route>
                        <Route path='/contentlist'>
                            <Route index element={<ContentList />} />
                            {/* <Route path=':name' element={<Project />} /> */}
                        </Route>
                        <Route path='/profileinfoedit'>
                            <Route index element={<ProfileInfoEdit />} />
                            {/* <Route path=':name' element={<Project />} /> */}
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App1;
{
    /* 
    첫번째 방법
    <Route path='/경로, 상대, 절대' element={컴포넌트} />

    두번째 방법
    <Route path='/경로, 상대, 절대' element={컴포넌트} ></Route> 
    
    세번째 방법
    <Route>
        <Route/>
        <Route/>
    </Route>

    <Route path='/profile' element={<Profile />} />
    <Route path='/profile/:name' element={<Project />} />
    <Route path='/profile/:사용자정의동적변수' element={<Project />} />
    */
}
