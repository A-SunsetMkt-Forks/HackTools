import { createFromIconfontCN } from '@ant-design/icons';
import { Layout, Typography } from 'antd';
import React from 'react';
import { BiLockOpen, BiNotepad } from 'react-icons/bi';
import { GiEyeTarget, GiPirateHook } from 'react-icons/gi';
import { HiOutlineTemplate } from 'react-icons/hi';
import { MdChecklist, MdOutlineAdb } from 'react-icons/md';
import { RiRouteLine } from 'react-icons/ri';
import { SiJsonwebtokens } from 'react-icons/si';
import { TbBinary } from 'react-icons/tb';
import {GiWebSpit} from 'react-icons/gi';
import AboutUs from './AboutUs';
import FileTransfer from './file_transfer/File_transfer';
import EchoBase64 from './file_transfer/ObfuscatedFiles';
import CVEResearch from './misc/CVEResearch';
import Checklists from './misc/Checklists';
import Notepad from './misc/Notepad';
import FeedRSS from './misc/rss/FeedRSS';
import ADB from "./mobile/Android/ADB";
import Hooking from './mobile/Hooking';
import MSFBuilder from './system/CnCutils/MSFBuilder';
import LinuxCommands from './system/linux/LinuxCommands';
import ReverseShell from './system/linux/ReverseShell';
import TtySpawnShell from './system/linux/TtySpawnShell';
import PowershellCommands from './system/windows/Powershell/PowershellCommands';
import WindowSecretDumper from './system/windows/SecretsDumper';
import DataManipulation from './web/DataManipulation/';
import JWToken from './web/JWToken';
import LFI from './web/LFI';
import WebShells from './web/WebShells';
import SQLMainPage from './web/SQLPage';
import SSRF from './web/SSRF';
import SSTI from './web/SSTI';
import XSS from './web/XSS';
const { Paragraph } = Typography;
const { Sider, Content, Footer } = Layout;
const IconFont = createFromIconfontCN({
    scriptUrl: ['./iconfont.js']
});


export interface IRouterComponent {
    key: string;
    icon: JSX.Element;
    name: string;
    componentRoute: React.FunctionComponent;
    type: string;
}



const WebTab: Array<IRouterComponent> = [
    {
        key: '1',
        icon: <GiWebSpit type='icon-php' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Web Shells',
        componentRoute: WebShells,
        type: "web"
    },
    {
        key: '2',
        icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M13.94 3.045a.75.75 0 0 0-1.38-.59l-4.5 10.5a.75.75 0 1 0 1.38.59l4.5-10.5ZM5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill='white'></path></svg>),
        name: 'LFI',
        componentRoute: LFI,
        type: "web"
    },
    {
        key: '3',
        icon: <IconFont type='icon-js' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'XSS',
        componentRoute: XSS,
        type: "web"
    },
    {
        key: '4',
        icon: <IconFont type='icon-sql' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'SQL Injection',
        componentRoute: SQLMainPage,
        type: "web"
    },
    {
        key: '5',
        icon: <TbBinary style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Data Manipulation',
        componentRoute: DataManipulation,
        type: "web"
    },
    {
        key: '6',
        icon: <SiJsonwebtokens style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'JSON Web Token',
        componentRoute: JWToken,
        type: "web"
    },
    {
        key: '7',
        icon: <RiRouteLine style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'SSRF',
        componentRoute: SSRF,
        type: "web"
    },
    {
        key: '8',
        icon: <HiOutlineTemplate style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'SSTI',
        componentRoute: SSTI,
        type: "web"
    },


]
const SystemTab: Array<IRouterComponent> = [
    {
        key: '1',
        icon: <IconFont type='icon-gnubash' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Reverse Shell',
        componentRoute: ReverseShell,
        type: "system"
    },
    {
        key: '2',
        icon: <IconFont type='icon-lvzhou_yuanchengTelnet' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'TTY Spawn Shell',
        componentRoute: TtySpawnShell,
        type: "system"
    },

    {
        key: '3',
        icon: <IconFont type='icon-linux' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Useful Linux commands',
        componentRoute: LinuxCommands,
        type: "system"
    },
    {
        key: '4',
        icon: <IconFont type='icon-powershell' style={{ fontSize: '1.5em', marginTop: 3 }} />, name: 'PowerShell Commands',
        componentRoute: PowershellCommands,
        type: "system"
    },
    {
        key: '5',
        icon: <IconFont type='icon-shield' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'MSF Builder',
        componentRoute: MSFBuilder,
        type: "system"
    },
    {
        key: '6',
        icon: <IconFont type='icon-Encode-File' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Obfuscated Files or Information',
        componentRoute: EchoBase64,
        type: "system"
    },
    {
        key: '7',
        icon: <IconFont type='icon-transfer' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Transfer Methods',
        componentRoute: FileTransfer,
        type: "system"
    },
    {
        key: '8',
        icon: <BiLockOpen style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Secrets Dumper',
        componentRoute: WindowSecretDumper,
        type: "system"
    },
    {
        key: '9',
        icon: <IconFont type='icon-about' style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'About us',
        componentRoute: AboutUs,
        type: "system"
    },
]
const MobileTab: Array<IRouterComponent> = [
    {
        key: '1',
        icon: <MdOutlineAdb style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'ADB Commands',
        componentRoute: ADB,
        type: "mobile"
    },
    {
        key: '2',
        icon: <GiPirateHook style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Hooking',
        componentRoute: Hooking,
        type: "mobile"
    },
]
const MiscTab: Array<IRouterComponent> = [
    {
        key: '1',
        icon: <BiNotepad style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Notepad',
        componentRoute: Notepad,
        type: "misc"
    },
    {
        key: '2',
        icon: <MdChecklist style={{ fontSize: '1.5em', marginTop: 3 }} />,
        name: 'Checklist',
        componentRoute: Checklists,
        type: "misc"
    },
]

// Make a single list of all tabs
const Tabs = [...WebTab, ...SystemTab, ...MobileTab, ...MiscTab];
console.log(Tabs);
export default Tabs;