/** 
 * <h4 dir="rtl" style="color:red; font-family: Helvetica, Arial, sans-serif">
 * ������ ������ ����� ����� ��� ��� ������ T ������ ������ ������.
 * </h4>
 * 
 * @author Evgeny KANEL+ ���� ���� �����, ����� ������ ������, ����������� ������, �������
 * @version 26.11.2007-25.12.2013
 * @param <T> ����� ���� ������
 */
public class Node<T>
{
    private T info;
    private Node<T> next;

    /**
  * <dt dir="rtl" >
     * <b>
     * ������ ���� �����; ��� ������ ��� x ���� �� ����� �����
     * </b>
  * 
     * @param x ��� ������
     * 
     */
    public Node(T x)
    {
        this.info = x;
        this.next = null;
    }

    /**
  * <dt dir="rtl" >
     * <b>
     * ������ ���� �����; ��� ������ ��� x ������� ������ �� ��� next.
     * ���� �� next ���� ����� null
     * </b>
  * 
     * @param x ��� ������
     * @param next ����� ������ ������
     */
    public Node(T x, Node<T> next)
    {
        this.info = x;
        this.next = next;
    }
    
    /** KANEL
  * <dt dir="rtl" >
     * <b>
     * ������ ������ �� ���� �� ������
     * </b>
  * 
  * @return ��� ������
     */
    public T getValue()
    {
        return(this.info);
    }
    
     /**
  * <dt dir="rtl" >
     * <b>
     * ������ ������ �� ���� �� ������
     * </b>
  * 
  * @return ��� ������
     */
    public T getInfo()
    {
        return(this.info);
    }
    /**
  * <dt dir="rtl" >
  * <b>
  * ������ ���� �� ���� ����� ������ �-x
  * </b>
  * 
  * @param x ��� ������ ���� 
     */
    public void setInfo(T x)
    {
         this.info = x;
    }
    
     /** KANEL
  * <dt dir="rtl" >
  * <b>
  * ������ ���� �� ���� ����� ������ �-x
  * </b>
  * 
  * @param x ��� ������ ���� 
     */
    public void setValue(T x)
    {
         this.info = x;
    }
    
    /**
  * <dt dir="rtl" >
  * <b>
  * ������ ������ �� ������ ������; �� ��� ����� �����, ������ ������ null
  * </b>
  * 
  * @return ����� ������ ������
     */
    public Node<T> getNext()
    {   
        return(this.next);
    }
    
    /**
  * <dt dir="rtl" >
  * <b>
  * ������ ���� �� ������ ������ �-next.
  * ���� �� next ���� ����� null
  * </b>
  * 
  * @param next ����� ������ ������
     */
    public void setNext(Node<T> next)
    {
         this.next = next;
    }
    
     /** KANEL
  * <dt dir="rtl" >
  * <b>

* ������ ����� ��� ����� ����� ����
  * </b>
  * 
  *  
  * @return boolean
     */
    public boolean hasNext()
    {
      return this.next!=null;
    }
    
   
    /**
  * <dt dir="rtl" >
  * <b>
  * ������ ������ ������ ������ �� ������
  * </b>
  * 
  * @return ������ ������ �� ������
     */
    public String toString()
    {
     return("" + this.info);
    }
}