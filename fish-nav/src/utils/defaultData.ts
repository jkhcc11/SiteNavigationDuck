import { NavItem } from "./types";

const searchEngines = [
  {
    key: "https://www.google.com/search?q=",
    label: "谷歌",
    icon: "https://www.google.com/favicon.ico",
  },
  {
    label: "百度",
    key: "https://www.baidu.com/s?wd=",
    icon: "https://www.baidu.com/favicon.ico",
  },
  {
    label: "GitHub",
    key: "https://github.com/search?q=",
    icon: "https://github.com/favicon.ico",
  },
  {
    label: "必应",
    key: "https://www.bing.com/search?q=",
    icon: "https://www.bing.com/favicon.ico",
  },
  {
    label: "搜狗",
    key: "https://www.sogou.com/web?query=",
    icon: "https://www.sogou.com/favicon.ico",
  },
  {
    label: "360",
    key: "https://www.so.com/s?q=",
    icon: "https://www.so.com/favicon.ico",
  },
  {
    label: "淘宝",
    key: "https://s.taobao.com/search?q=",
    icon: "https://www.taobao.com/favicon.ico",
  },
  {
    label: "京东",
    key: "https://search.jd.com/Search?keyword=",
    icon: "https://www.jd.com/favicon.ico",
  },
  {
    label: "知乎",
    key: "https://www.zhihu.com/search?type=content&q=",
    icon: "https://www.zhihu.com/favicon.ico",
  },
  {
    label: "微博",
    key: "https://s.weibo.com/weibo?q=",
    icon: "https://www.weibo.com/favicon.ico",
  },
];

const quickAccessList = [
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "Google",
    url: "https://www.google.com/",
    img: "https://www.google.com/favicon.ico",
    category: "common",
  },
  {
    name: "百度",
    url: "https://www.baidu.com/",
    img: "https://www.baidu.com/favicon.ico",
    category: "common",
  },
  {
    name: "京东",
    url: "https://www.jd.com/",
    img: "https://www.jd.com/favicon.ico",
    category: "common",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
  {
    name: "在线格式转换",
    url: "https://www.alltoall.net/",
    img: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
    category: "convert",
    remark: "在线PDF转Word",
    description:
      "PDF转Word 免费PDF转化 免费在线格式转换工具 免费在线转换工具  免费视频在线转换 免费音频在线转换 免费在线转换",
  },
  {
    name: "PDFcandy",
    url: "https://pdfcandy.com/cn/",
    img: "https://pdfcandy.com/favicon.ico",
    category: "convert",
    remark: "PDF 转换器+ 46 种在线 PDF 工具 – PDF Candy",
    description:
      "PDF Candy 为您提供最好的免费 PDF 转换器和许多其他在线 PDF 工具。安全地将图像、电子书和文档转换为 PDF，反之亦然。",
  },
] as Array<NavItem>;

const categoryList = [
  {
    label: "常用工具",
    key: "common",
    children: [
      {
        label: "常用工具1",
        key: "common1",
        children: [
          {
            label: "常用工具2",
            key: "common2",
          },
          {
            label: "格式转换",
            key: "convert1",
          },
          {
            label: "图片素材",
            key: "imgLib1",
          },
          {
            label: "图标素材",
            key: "iconLib1",
          },
          {
            label: "PPT资源",
            key: "pptLib1",
          },
        ],
      },
      {
        label: "格式转换",
        key: "convert2",
      },
      {
        label: "图片素材",
        key: "imgLib2",
      },
      {
        label: "图标素材",
        key: "iconLib2",
      },
      {
        label: "PPT资源",
        key: "pptLib2",
      },
    ],
  },
  {
    label: "格式转换",
    key: "convert",
  },
  {
    label: "图片素材",
    key: "imgLib",
  },
  {
    label: "图标素材",
    key: "iconLib",
  },
  {
    label: "PPT资源",
    key: "pptLib",
  },
];

export { searchEngines, quickAccessList, categoryList };
