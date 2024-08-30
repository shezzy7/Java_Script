import java.util.*;
public class leet{
    public static String vPath(String path){
        Stack<String> st = new Stack<>();
        String res = "";
        for(int i=0;i<path.length();i++){
            char ch = path.charAt(i);
            if(ch=='/'){
                if(res.equals("..")){
                    
                        System.out.println("Poped value : "+st.pop());
                    
                }
                else if(res!="" && res!="."){
                        System.out.println("Pushed value : "+res);
                    st.push(res);
                }
                res="";
            }
            else{
                
            res+=ch;

            }
        }
        if(res.equals("..")){
            if(!st.isEmpty()){
                st.pop();
            }
        }
        else if(!res.equals("") && !res.equals(".")){
            st.push(res);
        }
        
        String str2 ="/"+ String.join("/",st);
        System.out.print(str2);
        return str2;
    }
    public static void main(String args[]){
        String kb = vPath("/..");
        System.out.println(kb);
        String ab = "..";
        if(ab==".."){
            System.out.print("hello");
        }
    }
}