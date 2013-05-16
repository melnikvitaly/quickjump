using SKYPE4COMLib;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace QuickJump
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            Loaded += MainWindow_Loaded;
        }
        SkypeClass skype;
        PluginMenuItem item;
        void MainWindow_Loaded(object sender, RoutedEventArgs e)
        {
            try
            {
                this.myCallbackDelegate = new HookProc(this.MyCallbackFunction);

                // setup a keyboard hook
                //Process.GetProcessesByName("Skype.exe").First().Threads[0].Id
                SetWindowsHookEx(HookType.WH_KEYBOARD, this.myCallbackDelegate, IntPtr.Zero, 0);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        void skype__ISkypeEvents_Event_Command(Command pCommand)
        {
            
        }
       public delegate IntPtr HookProc(int code, IntPtr wParam, IntPtr lParam);
        private HookProc myCallbackDelegate = null;
        void skype_PluginMenuItemClicked(SKYPE4COMLib.PluginMenuItem pMenuItem, SKYPE4COMLib.UserCollection pUsers, SKYPE4COMLib.TPluginContext PluginContext, string ContextId)
        {
          
        }

        public enum HookType : int
        {
            WH_JOURNALRECORD = 0,
            WH_JOURNALPLAYBACK = 1,
            WH_KEYBOARD = 2,
            WH_GETMESSAGE = 3,
            WH_CALLWNDPROC = 4,
            WH_CBT = 5,
            WH_SYSMSGFILTER = 6,
            WH_MOUSE = 7,
            WH_HARDWARE = 8,
            WH_DEBUG = 9,
            WH_SHELL = 10,
            WH_FOREGROUNDIDLE = 11,
            WH_CALLWNDPROCRET = 12,
            WH_KEYBOARD_LL = 13,
            WH_MOUSE_LL = 14
        }

     // initialize our delegate
     

     [DllImport("user32.dll")]
     public static extern IntPtr SetWindowsHookEx(HookType code, HookProc func, IntPtr hInstance, int threadID);

     [DllImport("user32.dll")]
     static extern int CallNextHookEx(IntPtr hhk, int nCode, IntPtr wParam, IntPtr lParam);

     public IntPtr MyCallbackFunction(int code, IntPtr wParam, IntPtr lParam)
     {
         if (code < 0)
         {
             //you need to call CallNextHookEx without further processing
             //and return the value returned by CallNextHookEx
             return new IntPtr(CallNextHookEx(IntPtr.Zero, code, wParam, lParam));
         }
         // we can convert the 2nd parameter (the key code) to a System.Windows.Forms.Keys enum constant

         //return the value returned by CallNextHookEx
         return new IntPtr(CallNextHookEx(IntPtr.Zero, code, wParam, lParam));
     }
    }
}
