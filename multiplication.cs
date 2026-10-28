// Таблица умножения на C#
using System;

class Program
{
    static void Main()
    {
        Console.Write("Введите число: ");
        int number = int.Parse(Console.ReadLine());

        for (int i = 1; i <= 10; i++)
        {
            Console.WriteLine($"{number} x {i} = {Multiply(number, i)}");
        }
    }

    static int Multiply(int a, int b)
    {
        return a * b;
    }
}
