import React, { useState } from 'react';

// 单个菜单项组件
const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div onClick={toggleMenu} className="cursor-pointer">
        {item.name}
      </div>
      {isOpen && item.children && item.children.length > 0 && (
        <div className=" w-full  pl-4">
            
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// 多级菜单组件
const MultiLevelMenu = ({ menuData }) => {
  return (
    <div className="w-full bg-blue-300 bg-opacity-40">
      {menuData.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
};

// 示例菜单数据
const menuData = [
  {
    name: '菜单 1',
    children: [
      {
        name: '子菜单 1-1',
        children: [
          { name: '子菜单 1-1-1' },
          { name: '子菜单 1-1-2' },
        ],
      },
      { name: '子菜单 1-2' },
    ],
  },
  {
    name: '菜单 2',
    children: [
      { name: '子菜单 2-1' },
      {
        name: '子菜单 2-2',
        children: [{ name: '子菜单 2-2-1' }],
      },
    ],
  },
];

// 主应用组件
const Menu = () => {
  return (
    <div className="app">
      <h1>多级菜单示例</h1>
      <MultiLevelMenu menuData={menuData} />
    </div>
  );
};

export default Menu;
