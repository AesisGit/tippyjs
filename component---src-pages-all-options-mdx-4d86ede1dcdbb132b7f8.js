;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    217: function(e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'default', function() {
          return d
        }),
        t.d(a, '_frontmatter', function() {
          return i
        })
      t(53)
      var n = t(24),
        m = t.n(n),
        o = t(7),
        r = t.n(o),
        p = t(0),
        s = t.n(p),
        c = t(8),
        l = t(219),
        g = {},
        d = (function(e) {
          function a(a) {
            var t
            return ((t = e.call(this, a) || this).layout = l.a), t
          }
          return (
            r()(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.components,
                t = m()(e, ['components'])
              return s.a.createElement(
                c.MDXTag,
                {
                  name: 'wrapper',
                  Layout: this.layout,
                  layoutProps: Object.assign({}, g, t),
                  components: a,
                },
                s.a.createElement(
                  c.MDXTag,
                  { name: 'p', components: a },
                  'Below is a table of all the options you can supply.',
                ),
                s.a.createElement(
                  c.MDXTag,
                  { name: 'table', components: a },
                  s.a.createElement(
                    c.MDXTag,
                    { name: 'thead', components: a, parentName: 'table' },
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'thead' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'th',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Option',
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'th',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        'Type',
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'th',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        'Default',
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'th',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Description',
                      ),
                    ),
                  ),
                  s.a.createElement(
                    c.MDXTag,
                    { name: 'tbody', components: a, parentName: 'table' },
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'a11y',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'true',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Short for ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'accessibility',
                        ),
                        ' - ensures the reference element can receive focus so the tooltip can be activated by keyboard navigation by adding ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'tabindex="0"',
                        ),
                        ' to the reference element.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'animateFill',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'true',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the background fill color should be animated. Disabled if ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'arrow: true',
                        ),
                        '.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'allowHTML',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'true',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the tippy can have HTML content rendered inside of it. Make sure you are sanitizing any user data if rendering HTML to prevent XSS attacks.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'animation',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"shift-away"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'The type of transition animation. Possible values: ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"shift-away"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"shift-toward"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"fade"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"scale"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"perspective"',
                        ),
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'appendTo',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Element',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Function',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'document.body',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'The element to append the tippy to. Specify the string ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"parent"',
                        ),
                        " to append it to the reference element's parent. You can also define a function that takes the reference element as an argument and returns a new element.",
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'aria',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"describedby"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'The ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'aria-*',
                        ),
                        ' attribute applied to the reference element. Use either ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"describedby"',
                        ),
                        ' or ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"labelledby"',
                        ),
                        '. Use a falsy value ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'null',
                        ),
                        ' / ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                        ' to prevent the attribute from being added.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'arrow',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if an arrow should be added to the tippy pointing toward the reference element.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'arrowType',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"sharp"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines the arrow type. Possible values: ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"sharp"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"round"',
                        ),
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boundary',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'HTMLElement',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"scrollParent"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        "The boundary that Popper.js' ",
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'preventOverflow',
                        ),
                        ' modifier adheres to. Possible values: ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"scrollParent"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"window"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"viewport"',
                        ),
                        ', or an ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'HTMLElement',
                        ),
                        '.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'content',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Element',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Function',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '""',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'The content of the tippy. Along with a string or element, you can use a function that takes the reference element as an argument and returns content.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'delay',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '[show, hide]',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '[0, 20]',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Delay in ms once a trigger event is fired before a tippy shows or hides. Specifying a number means both the show and hide delays are the same. Use ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'null',
                        ),
                        ' in the array to use the default value.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'duration',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '[show, hide]',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '[275, 250]',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Duration of the CSS transition animation in ms. Specifying a number means both the show and hide delays are the same. Use ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'null',
                        ),
                        ' in the array to use the default value.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'distance',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '10',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'How far in pixels the tippy element is from the reference element. Only applies to a single axis and not to the parent popper element, see the ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'offset',
                        ),
                        ' option.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'flip',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'true',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the tippy flips so that it is placed within the viewport as best it can be if there is not enough room.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'flipBehavior',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string[]',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"flip"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines the order of flipping, i.e. which placements to prefer if a certain placement cannot be used. Use an array such as ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '["bottom", "left"]',
                        ),
                        ' to prefer the "left" placement if "bottom" is unavailable, instead of "top".',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'flipOnUpdate',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the tippy should flip when necessary if its position updates while showing (for example, while scrolling, resize, or if the size of the tooltip changed).',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'followCursor',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        "Determines if the tippy follows the user's mouse cursor while showing. Use the strings ",
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"vertical"',
                        ),
                        ' or ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"horizontal"',
                        ),
                        ' to only follow the cursor on a single axis. Use ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"initial"',
                        ),
                        ' to place the tippy at the initial cursor position upon show, but prevent following it.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'hideOnClick',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'true',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the tippy should hide if a click event was fired outside of it (i.e. clicking on the reference or the body). For click-triggered tippys, using ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                        ' will prevent the tippy from ever hiding once it is showing. To prevent clicks outside of the tippy from hiding it but still allow it to be toggled, use the string ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"toggle"',
                        ),
                        '.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'ignoreAttributes',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'data-tippy-*',
                        ),
                        ' attributes on the reference element should be ignored. Increases performance if you enable it.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'inertia',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if an inertial slingshot effect is applied to the CSS transition-timing-function.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'interactive',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the tippy is interactive, i.e. it can be hovered over or clicked without hiding.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'interactiveBorder',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '2',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines the size in pixels of the invisible border around a tippy which will prevent it from closing if the cursor left the element.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'interactiveDebounce',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '0',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Debounces the internal ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'onMouseMove',
                        ),
                        ' handler which determines when an interactive tippy should hide.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'lazy',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'true',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        "Determines if the positioning engine (powered by Popper.js) is created lazily. That is, it's only created when necessary upon showing the tippy for the first time. If you need to access the ",
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'popperInstance',
                        ),
                        ' synchronously after creation, set this to ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                        '. Please note that this decreases performance considerably.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'maxWidth',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '350',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        "Determines the maximum width of the tippy - use a number for pixels, or a string to add units such as rem. In CSS, it's defined as ",
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '350px',
                        ),
                        ' by default. This option applies the width to the ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'style',
                        ),
                        ' attribute of the tippy element.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'multiple',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the reference element can have multiple tippys applied to it.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'offset',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '0',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines the offset of the tippy element. Unlike ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'distance',
                        ),
                        ', it can work on both axes by using a string in the form ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"x, y"',
                        ),
                        ', such as ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"50, 20"',
                        ),
                        '. Avoid this option if using ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'interactive: true',
                        ),
                        '.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'onHidden',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Function',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'noop',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Lifecycle function invoked when the tippy has fully transitioned out.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'onHide',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Function',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'noop',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Lifecycle function invoked when the tippy begins to transition out. You can cancel hiding by returning ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                        ' from this lifecycle.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'onMount',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Function',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'noop',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Lifecycle function invoked when the tippy has been mounted to the DOM.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'onShow',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Function',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'noop',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Lifecycle function invoked when the tippy begins to transition in. You can cancel showing by returning ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                        ' from this lifecycle.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'onShown',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Function',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'noop',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Lifecycle function invoked when the tippy has fully transitioned in.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'placement',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"top"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Positions the tippy relative to its reference element. Use the suffix ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '-start',
                        ),
                        ' or ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '-end',
                        ),
                        ' to shift the tippy to the start or end of the reference element, instead of centering it. For example, ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'top-start',
                        ),
                        ' or ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'left-end',
                        ),
                        '.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'popperOptions',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'object',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '{}',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Specify custom Popper.js options. See the ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'a',
                            components: a,
                            parentName: 'td',
                            props: {
                              href:
                                'https://popper.js.org/popper-documentation.html',
                            },
                          },
                          'Popper.js documentation',
                        ),
                        ' for more.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'role',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"tooltip"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Specifies the ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'role',
                        ),
                        ' attribute on the tippy element.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'showOnInit',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the tippy will be shown immediately once the instance is created. If using on page load, use ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'sticky: true',
                        ),
                        ' because the reference element can move around while the layout gets built by the browser after initialization (unless the layout is guaranteed to be static).',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'size',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"regular"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines the size of the tippy, defined in CSS. Possible values: ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"small"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"regular"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"large"',
                        ),
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'sticky',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Ensures the tippy stays stuck to its reference element if it moves around while showing. See the ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'updateDuration',
                        ),
                        ' option to change the transition duration between position updates.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'target',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '""',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'CSS selector string used for event delegation. See ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'a',
                            components: a,
                            parentName: 'td',
                            props: { href: '/misc#event-delegation' },
                          },
                          'Event delegation',
                        ),
                        ' for more information.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'theme',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"dark"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        "Themes added as classes (each separated by a space) to the tippy element's ",
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'classList',
                        ),
                        '.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'touch',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'true',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines if the tippy displays on touch devices.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'touchHold',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'boolean',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'false',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines trigger behavior on touch devices. Instead of a tap on the reference to show and a tap elsewhere to hide the tippy, the reference must be pressed and held for the tippy to show. Letting go from the screen will hide it. To prevent the mobile context menu from appearing, ensure the element cannot be selected using user-select: none; and/or prevent the default behavior for the contextmenu event.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'trigger',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'string',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"mouseenter focus"',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'The events (each separated by a space) which cause a tippy to show. Possible values: ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"mouseenter"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"focus"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"click"',
                        ),
                        ', ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"manual"',
                        ),
                        '. Use ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '"manual"',
                        ),
                        ' to only trigger the tippy programmatically.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'updateDuration',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '0',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'The transition duration between position updates for the ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'sticky',
                        ),
                        ' and ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'flipOnUpdate',
                        ),
                        ' options.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'wait',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'Function',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'null',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'A function that, when defined, will wait until you manually invoke the ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'show()',
                        ),
                        ' method when a tippy is triggered. It takes the tippy instance as the first argument, and the trigger event as the second argument.',
                      ),
                    ),
                    s.a.createElement(
                      c.MDXTag,
                      { name: 'tr', components: a, parentName: 'tbody' },
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'zIndex',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'number',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: 'center' },
                        },
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          '9999',
                        ),
                      ),
                      s.a.createElement(
                        c.MDXTag,
                        {
                          name: 'td',
                          components: a,
                          parentName: 'tr',
                          props: { align: null },
                        },
                        'Determines the ',
                        s.a.createElement(
                          c.MDXTag,
                          {
                            name: 'code',
                            components: a,
                            parentName: 'td',
                            props: { className: 'language-text' },
                          },
                          'z-index',
                        ),
                        ' of the tippy.',
                      ),
                    ),
                  ),
                ),
              )
            }),
            a
          )
        })(s.a.Component)
      d.isMDXComponent = !0
      var i = {}
    },
  },
])
//# sourceMappingURL=component---src-pages-all-options-mdx-4d86ede1dcdbb132b7f8.js.map
