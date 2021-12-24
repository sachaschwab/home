import Sidebar_item from "./Sidebar-item";
import React,{useState,useEffect} from 'react';
import { Posts } from "../data/posts";

export const Sidebar = () => {
    return( 
        <div className="Sidebar">
            {Posts.map((e)=>{
                return (
                <Sidebar_item item_name={e.title}/>
                );})}
        </div>
    );
};

export default Sidebar;