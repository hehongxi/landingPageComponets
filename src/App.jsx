import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CommonLanddingPage from './components/CommonLanddingPage';
import Workspacelike from './components/WorkSpacelike';
import XiaomiLike from './components/XiaomiLike';
import GoodPatchLike from './components/GoodPatchLike';
import Blankpage from './components/BlankPage';
import KeenonLike from './components/KeenonLike';


// 根节点
export default function App() {
  return (
    <>
      <Router>
        <MainLayout />
      </Router>
    </>
  )
}

function MainLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CommonLanddingPage" element={<CommonLanddingPage />} />
        <Route path="/Workspacelike" element={<Workspacelike />} />
        <Route path="/XiaomiLike" element={<XiaomiLike />} />
        <Route path="/GoodPatchLike" element={<GoodPatchLike />} />
        <Route path="/BlankPage" element={<Blankpage />} />
        <Route path="/KeenonLike" element={<KeenonLike />} />

      </Routes>
    </>
  )
}
