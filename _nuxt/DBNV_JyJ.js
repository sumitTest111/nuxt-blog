import{_ as m}from"./Bd5Skrnv.js";import{_ as u,a as g}from"./BD6AP26F.js";import{_ as f}from"./C2sPHNYF.js";import{_ as x}from"./BuWsol2t.js";import{f as h,o as a,c as n,b as o,w as b,a as t,t as s,F as k,r as v}from"./BvKp9lRz.js";const y={class:"group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"},w={class:"sm:col-span-3"},L={class:"sm:col-span-7 p-5"},j={class:"text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"},z={class:"text-ellipsis line-clamp-2"},B={class:"text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"},N={class:"flex items-center"},C={class:"flex items-center gap-1 flex-wrap"},D={class:"flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"},M=h({__name:"card",props:{path:{default:"/"},title:{default:"no-title"},date:{default:"no-date"},description:{default:"no-description"},image:{default:"/blogs-img/blog.jpg"},alt:{default:"no-alt"},ogImage:{default:"/blogs-img/blog.jpg"},tags:{default:()=>[]},published:{type:Boolean,default:!1}},setup(F){return(e,l)=>{const d=m,i=u,c=g,p=f,_=x;return a(),n("article",y,[o(_,{to:e.path,class:"grid grid-cols-1 sm:grid-cols-10 gap-1"},{default:b(()=>[t("div",w,[o(d,{class:"h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500",width:"300",src:e.image,alt:e.alt},null,8,["src","alt"])]),t("div",L,[t("h2",j,s(e.title),1),t("p",z,s(e.description),1),t("div",B,[t("div",N,[o(i),t("p",null,s(e.date),1)]),t("div",C,[o(c),(a(!0),n(k,null,v(e.tags,r=>(a(),n("p",{key:r,class:"bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold"},s(r),1))),128))])]),t("div",D,[l[0]||(l[0]=t("p",null,"Read More",-1)),o(p)])])]),_:1},8,["to"])])}}});export{M as _};
