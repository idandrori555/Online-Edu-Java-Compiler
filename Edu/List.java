
/**
 * <h4 dir="rtl" style="color:red; font-family: Helvetica, Arial, sans-serif">
 * ������ ������ ���� �����-������ ������ �� ����� ������ ��� ���� �����.
 * </h4>
 *
 * @author ���� ���� �����, ����� ������ ������, ����������� ������, �������
 * @version 26.11.2007
 * @param <T> ����� ������ ������
 */
public class List<T> {

    private Node<T> first;

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ���� ����� ����
     * </b>
     */
    public List() {
        this.first = null;
    }

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ������ �� ����� �� ������ ������� ������ �������; �� ������ ����,
     * ������ ����� null
     * </b>
     *
     * @return ����� ����� ������
     */
    public Node<T> getFirst() {
        return (this.first);
    }

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ������ ������ ������� �� ���� x ���� ��� ���� ����� pos; �� pos
     * ��� null, �� x ����� ����� ������ ������; ������ ������ �� ����� ��
     * ������ ����� �������.
     * <br>
     * <u>����:</u> pos ��� ���� ���� ������ ������� �� null
     * </b>
     *
     * @param pos ���� ������ ����� ����� ����
     * @param x ��� ������
     * @return ����� ������ ����� �������
     */
    public Node<T> insert(Node<T> pos, T x) {
        Node<T> node = new Node<T>(x);

        if (pos == null) {
            node.setNext(this.first);
            this.first = node;
        } else {
            node.setNext(pos.getNext());
            pos.setNext(node);
        }
        return (node);
    }

    /**
     * <dt dir="rtl" >
     * <b>
     * ������ ������ ������� ������� �� ����� ����� ����� pos, ������� �� �����
     * ����� �-pos; �� ���� ����� ������ - ����� null
     * <br>
     * <u>����:</u> pos ��� ���� ������ ������� ����� null.
     * </b>
     *
     * @param pos ���� ������ ������
     * @return ���� ����� � pos
     */
    public Node<T> remove(Node<T> pos) {
        if (this.first == pos) {
            this.first = pos.getNext();
        } else {
            Node<T> prevPos = this.getFirst();
            while (prevPos.getNext() != pos) {
                prevPos = prevPos.getNext();
            }
            prevPos.setNext(pos.getNext());
        }

        Node<T> nextPos = pos.getNext();
        pos.setNext(null);

        return nextPos;
    }

    /**
     * <dt dir="rtl">
     * <b>
     * ������ ������ '���' �� ������ ������� ����, �'���' ����
     * </b>
     *
     * @return `���` �� ������ ������� ����, �`���` ����
     */
    public boolean isEmpty() {
        return (this.first == null);
    }

    /**
     * <dt dir="rtl">
     * <b>
     * ������ ������ ����� �� ������, ����� �� ����� �����:
     * [x1,x2,&#46;&#46;&#46;,xn], ���� x1 ��� ����� ������ ������
     * </b>
     *
     * @return ������ ������ �� ������
     */
    public String toString() {
        String str = "[";
        Node<T> pos = this.first;
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
