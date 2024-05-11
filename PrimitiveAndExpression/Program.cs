namespace Primitive
{
    class Program
    {
        static void Main(string[] args)
        {
            byte byteNumber = 8;
            int intNumber = 20000;
            float floatNumber = 1.4f;
            decimal decimalNumber = 1.220m;
            char character = 'H';
            bool boolean = false;
            var variableValue = 2;
            const float Pi = 3.14f;
 
            Console.WriteLine(byteNumber);
            Console.WriteLine(intNumber);
            Console.WriteLine(floatNumber);
            Console.WriteLine(decimalNumber);
            Console.WriteLine(character);
            Console.WriteLine(boolean);
            Console.WriteLine(variableValue);
            Console.WriteLine(Pi);
            Console.WriteLine("{0} {1}", byte.MinValue, byte.MaxValue);
            Console.WriteLine("{0} {1}", short.MinValue, short.MaxValue);
            Console.WriteLine("{0} {1}", int.MinValue, int.MaxValue);
            Console.WriteLine("{0} {1}", long.MinValue, long.MaxValue);
            Console.WriteLine("{0} {1}", float.MinValue, float.MaxValue);
        }
    }
}
