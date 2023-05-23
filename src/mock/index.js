import Mock from "mockjs";

import mapData from './mapData.json'
import nationData from './nationData.json'
import saleData from './saleData.json'
import BJ from './province/BJ.json'
import AH from './province/AH.json'
import CQ from './province/CQ.json'
import FJ from './province/FJ.json'
import GS from './province/GS.json'
import GD from './province/GD.json'
import GX from './province/GX.json'
import GZ from './province/GZ.json'
import HI from './province/HI.json'
import HE from './province/HE.json'
import HN from './province/HN.json'
import HL from './province/HL.json'
import HB from './province/HB.json'
import HU from './province/HU.json'
import JL from './province/JL.json'
import JS from './province/JS.json'
import JX from './province/JX.json'
import LN from './province/LN.json'
import NM from './province/NM.json'
import NX from './province/NX.json'
import QH from './province/QH.json'
import SD from './province/SD.json'
import SX from './province/SX.json'
import SN from './province/SN.json'
import SH from './province/SH.json'
import SC from './province/SC.json'
import TJ from './province/TJ.json'
import XZ from './province/XZ.json'
import XJ from './province/XJ.json'
import YN from './province/YN.json'
import ZJ from './province/ZJ.json'



Mock.mock('/api/map',{"code": 0,data:mapData})
Mock.mock('/api/nation',{"code": 0,data:nationData})
Mock.mock('/api/sale',{"code": 0,data:saleData})
Mock.mock(/\/api\/province\?name=\w+/, 'get', function(options) {
    const name = options.url.match(/\/api\/province\?name=(\w+)/)[1];
    switch (name) {
        case 'BJ':
          return {
            code: 0,
            data: BJ
          };
        case 'AH':
          return {
            code: 0,
            data: AH
          };
        case 'CQ':
          return {
            code: 0,
            data: CQ
          };
        case 'FJ':
          return {
            code: 0,
            data: FJ
          };
        case 'GS':
          return {
            code: 0,
            data: GS
          };
        case 'GD':
          return {
            code: 0,
            data: GD
          };
        case 'GX':
          return {
            code: 0,
            data: GX
          };
        case 'GZ':
          return {
            code: 0,
            data: GZ
          };
        case 'HI':
          return {
            code: 0,
            data: HI
          };
        case 'HE':
          return {
            code: 0,
            data: HE
          };
        case 'HN':
          return {
            code: 0,
            data: HN
          };
        case 'HL':
          return {
            code: 0,
            data: HL
          };
        case 'HB':
          return {
            code: 0,
            data: HB
          };
        case 'HU':
          return {
            code: 0,
            data: HU
          };
        case 'JL':
          return {
            code: 0,
            data: JL
          };
        case 'JS':
          return {
            code: 0,
            data: JS
          };
        case 'JX':
          return {
            code: 0,
            data: JX
          };
        case 'LN':
          return {
            code: 0,
            data: LN
          };
        case 'NM':
          return {
            code: 0,
            data: NM
          };
        case 'NX':
          return {
            code: 0,
            data: NX
          };
        case 'QH':
          return {
            code: 0,
            data: QH
          };
        case 'SD':
          return {
            code: 0,
            data: SD
          };
        case 'SX':
          return {
            code: 0,
            data: SX
          };
        case 'SN':
          return {
            code: 0,
            data: SN
          };
        case 'SH':
          return {
            code: 0,
            data: SH
          };
        case 'SC':
          return {
            code: 0,
            data: SC
          };
        case 'TJ':
          return {
            code: 0,
            data: TJ
          };
        case 'XZ':
          return {
            code: 0,
            data: XZ
          };
        case 'XJ':
          return {
            code: 0,
            data: XJ
          };
        case 'YN':
          return {
            code: 0,
            data: YN
          };
        case 'ZJ':
          return {
            code: 0,
            data: ZJ
          };
        default:
          return {
            code: -1,
            message: 'Invalid province code'
          };
      }
      
    
  });