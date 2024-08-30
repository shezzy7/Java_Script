import java.util.*;
public class leet{
    public static int findNextBig(int nums2[],int j){
        
        for(int i=j+1;i<nums2.length;i++){
            if(nums2[i]>nums2[j]){
                return nums2[i];
            }
        }
        return -1;
    }
    public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int ans[]=new int[nums1.length];
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int i=0;i<nums2.length-1;i++){
            int nGreate = findNextBig(nums2,i);
            map.put(nums2[i],nGreate);
        }
        
        map.put(nums2[nums2.length-1],-1);
        System.out.println(map);
        for(int i=0;i<nums1.length;i++){
            ans[i]=(int)map.get(nums1[i]);
            System.out.println(ans[i]);
        }
        return ans;

}
public static void main(String args[]){
    int nums1[]={2,4};
    int nums2[]={4,2,5};
    System.out.print(nextGreaterElement(nums1,nums2));
}
}