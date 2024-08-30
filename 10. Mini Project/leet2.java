import java.util.*;
public class leet2{

    public static void nextGreaterElement(int[] nums1, int[] nums2) {
        int ans[]=new int[nums1.length];
        HashMap<Integer,Integer> map = new HashMap<>();
        Stack<Integer> st = new Stack<>();
        st.push(nums2[nums2.length-1]);
        for(int i=nums2.length-1;i>=0;i--){
            while(!st.isEmpty() && nums2[i]>=st.peek()){
                st.pop();
            }
            int res = st.isEmpty()? -1 : st.peek();
            
            st.push(nums2[i]);
            map.put(nums2[i],res);

        }
        for(int i=0;i<nums1.length;i++){
            ans[i]=map.get(nums1[i]);
        }
        return ans;
        
        

}
    public static void main(String args[]){
        int nums1[] = {1,2};
        int nums2[] = {1,2,3,4};
        nextGreaterElement(nums1,nums2);
    }
}