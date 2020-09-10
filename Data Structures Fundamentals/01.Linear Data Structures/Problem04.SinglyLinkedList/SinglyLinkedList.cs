namespace Problem04.SinglyLinkedList
{
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public class SinglyLinkedList<T> : IAbstractLinkedList<T>
    {
        private Node<T> _head;

        public SinglyLinkedList()
        {
            this._head = null;
            this.Count = 0;
        }

        public SinglyLinkedList(Node<T> head)
        {
            this._head = head;
            this.Count = 1;
        }

        public int Count { get; private set; }

        public void AddFirst(T item)
        {
            var newNode = new Node<T>
            {
                Value = item,
                Next = this._head
            };

            this._head = newNode;
            this.Count++;
        }

        public void AddLast(T item)
        {
            var newNode = new Node<T>
            {
                Value = item
            };

            if (this._head is null)
                this._head = newNode;
            else
            {
                var current = this._head;

                while (current.Next != null)
                    current = current.Next;

                current.Next = newNode;
            }

            this.Count++;
        }

        public T GetFirst()
        {
            this.ValidateIfEmpty();

            return this._head.Value;
        }

        public T GetLast()
        {
            this.ValidateIfEmpty();
            Node<T> current = this._head;

            while (current.Next != null)
            {
                current = current.Next;
            }

            return current.Value;
        }

        public T RemoveFirst()
        {
            this.ValidateIfEmpty();

            var headItem = this._head.Value;
            var newHead = this._head.Next;
            this._head.Next = null;
            this._head = newHead;
            this.Count--;

            return headItem;
        }

        public T RemoveLast()
        {
            this.ValidateIfEmpty();

            if (this._head.Next is null)
                return this.RemoveFirst();

            var current = this._head;

            while (current.Next.Next != null)
            {
                current = current.Next;
            }

            var lastItem = current.Next.Value;
            current.Next = null;
            this.Count--;

            return lastItem;
        }

        public IEnumerator<T> GetEnumerator()
        {
            Node<T> current = this._head;

            while (current != null)
            {
                yield return current.Value;
                current = current.Next;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
            => this.GetEnumerator();

        private void ValidateIfEmpty()
        {
            if (this.Count == 0)
            {
                throw new InvalidOperationException("Linked List is empty");
            }
        }
    }
}