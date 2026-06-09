
const NavItem = ({ item, isActive, setIsActive }) => {
    const { content } = item;
    return (
        <li onClick={() => setIsActive(content)} className={`text-lg font-medium cursor-pointer px-3 py-1 rounded-xl hover:bg-[#00c086c4] hover:text-[#f8f400] ${isActive === content && 'bg-[#00c086c4] text-[#f8f400]'}`}>
            {content}
        </li>
    );
};

export default NavItem;