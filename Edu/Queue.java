/**
 * <h4 dir="rtl" style="color:red; font-family: Helvetica, Arial, sans-serif">
 * ������ ������ ����� ���� �� �������� FIFO ������ ������ �� �����.
 * </h4>
 *
 * @author KANEL ���� ���� �����, ����� ������ ������, ����������� ������,
 * �������
 * @version 26.11.2007
 * @param <T> ����� ������ ����
 */
public class Queue<T> {

    private List<T> data;  // ����� �� ������� ���� ����
    private Node<T> lastPos; // (������ ����� ������ ������(������ 

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ���� ��� ���
     * </b>
     */
    public Queue() {
        this.lastPos = null;
        this.data = new List<T>();
    }

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ������ '���' �� ���� ������ ���, �'���' ����
     * </b>
     *
     * @return `���` �� ���� ������ ���, �`���` ����
     */
    public boolean isEmpty() {
        return (this.data.isEmpty());
    }

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ������ �� ���� x ���� ���� ������
     * </b>
     *
     * @param x ���� ������ ���� ����
     */
    public void insert(T x) {
        this.lastPos = this.data.insert(this.lastPos, x);
    }

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ������ �� ���� ����� ���� ������ ������� ����
     * <br><u>����:</u> ���� ������ ���� ���
     * </b>
     *
     * @return ���� ���� ����
     */
    public T remove() {
        if (this.lastPos == this.data.getFirst()) {
            this.lastPos = null;
        }
        T x = this.data.getFirst().getInfo();
        this.data.remove(this.data.getFirst());
        return (x);
    }

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ������ �� ���� �� ����� ����� ���� ���� �������
     * <br/><u>����:</u> ���� ������ ���� ���
     * </b>
     *
     * @return ���� ���� ���� ���� �������
     */
    public T head() {
        return (this.data.getFirst().getInfo());
    }

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ������ ������ ������ �� ���� ����� �� ����� �����:
     * [x1,x2,&#46;&#46;&#46;,xn], ���� x1 ��� ����� ����� ����
     * </b>
     *
     * @return ������ ������ �� ����
     */
    public String toString() {
        Node<T> pos = this.data.getFirst();

        String str = "[";
        while (pos != null) {
            str = str + pos.getInfo().toString();
            if (pos.getNext() != null) {
                str = str + ",";
            }
            pos = pos.getNext();
        }
        str = str + "]";

        return (str);
    }
}
