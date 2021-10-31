import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

interface SidebarProps {
    activeMenu: 'overview' | 'transactions' |'settings'
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogedOut = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };
  return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem href="/member" icon="overview" title="Overview" active={activeMenu === 'overview'} />
                    <MenuItem href="/member/transactions" icon="transaction" title="Transactions" active={activeMenu === 'transactions'} />
                    <MenuItem href="/member" icon="message" title="Messages" />
                    <MenuItem href="/member" icon="card" title="Card" />
                    <MenuItem href="/member" icon="reward" title="Rewards" />
                    <MenuItem href="/member/edit-profile" icon="setting" title="Settings" active={activeMenu === 'settings'} />
                    <MenuItem onCLick={onLogedOut} icon="logout" title="Log Out" />
                </div>
                <Footer />
            </div>
        </section>
  );
}
