import { useLocation } from 'react-router-dom';

export default function NavigationTracker() {
    useLocation(); // keep hook call to avoid React Router context warnings
    return null;
}
