//导航Item
export interface NavItem {
  name: string;
  url: string;
  img: string;
  //分类
  category: string;
  //简介
  remark: string;
  //描述
  description: string;
}

//收藏夹item
export interface FavoriteItem {
  /**
   * 标题
   */
  title: string;
  /**
   * 链接
   */
  href: string;
  /**
   * 子节点
   */
  children: Array<FavoriteItem>;
}
