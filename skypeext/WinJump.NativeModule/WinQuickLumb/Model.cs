using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Timers;
using System.Windows;
using System.Windows.Controls;

namespace WinQuickLumb
{
    class Model
    {
        string _Text;
        public string Text
        {
            set
            {
                _Text = value;

            }
            get;
        }

        public ICollection<Control> Buttons { set; get; }

        Timer timer = new Timer(1000);

        object locker = new object();

        bool locked = false;

        public Model()
        {            
            timer.Elapsed += timer_Elapsed;
            timer.Start();
        }

        string m_prevString = null;

        void timer_Elapsed(object sender, ElapsedEventArgs e)
        {
            if (locked) return;
            lock (timer)
            {
                if (locked) return;
                locked = true;
            }
            var str = Clipboard.GetText();
            if (m_prevString != str)
            {
                Text = str;
            }
        }
    }
}
