using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
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

        void MainWindow_Loaded(object sender, RoutedEventArgs e)
        {
            try
            {
                var skype = new SKYPE4COMLib.SkypeClass();
                try
                {
                    skype.Attach();
                    var item = skype.CreatePluginMenuItem("asdasdasd", SKYPE4COMLib.TPluginContext.pluginContextContact, "asdasd", "adasd", "", true, SKYPE4COMLib.TPluginContactType.pluginContactTypeAll, false);
                    skype.PluginMenuItemClicked += skype_PluginMenuItemClicked;
                    skype.OpenChatWindow("asd");
                    
                }
                finally
                {
                    if (skype != null)
                    {
                        Marshal.ReleaseComObject(skype);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        void skype_PluginMenuItemClicked(SKYPE4COMLib.PluginMenuItem pMenuItem, SKYPE4COMLib.UserCollection pUsers, SKYPE4COMLib.TPluginContext PluginContext, string ContextId)
        {
          
        }
    }
}
